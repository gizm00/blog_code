import {Map} from 'immutable';
import axios from 'axios';

function getFilterIndex(state, itemId) {
  return state.get('filters').findIndex(
    (item) => item.get('id') === itemId
  );
}

function getMarkerIndex(state, itemId) {
  return state.get('markers').findIndex(
    (item) => item.get('title') === itemId
  );
}

function getFilters(state, filterIndex) {
  return state.get('filters')
    .get(filterIndex)
    .update('inuse', inuse => inuse === false ? true : false);
}

function updateMarker(state, markerIndex, mapOnVal) {
  return state.get('markers')
    .get(markerIndex)
    .update('mapOn', mapOn => mapOnVal);
}

function setState(state, newState) {
  return state.merge(newState);
}

function onMarkerClick(state, marker) {

  console.log('markerClick in reducer')
  return state.merge(Map({
    'activeMarker': marker,
    'selectedTitle': marker.get('title'),
    'showingInfoWindow': true
  }))
}

function addMarker(state, marker) {
  let markers = state.get('gmapMarkers')
  let newMarkers = markers.push(marker)
  return state.update('gmapMarkers', oldmarkers => newMarkers)
}

function changeFilter(state, filter) {
  let filterIndex = getFilterIndex(state,filter)
  const updatedFilter = getFilters(state, filterIndex)
  let updatedFilters = state.get('filters')
  updatedFilters = updatedFilters.set(filterIndex, updatedFilter)

  let active_filters = updatedFilters.filter(
    item => item.get('inuse') === true
  )

  let markers = state.get('markers')
  let updatedMarkers = markers
  markers.forEach(marker => {
    let markerIndex = getMarkerIndex(state, marker.get('title'))
    let mapOn = true
    active_filters.forEach(item => {
      if (marker.get('properties').get(item.get('id')) !== true) {
        mapOn = false
      }
    })
    const updatedMarker = updateMarker(state, markerIndex, mapOn)
    updatedMarkers = updatedMarkers.set(markerIndex, updatedMarker)
  })

  return state.merge(Map({
    'filters': updatedFilters,
    'markers': updatedMarkers
  }))
}



// weatherDate will be in 2017-03-20 format
function getWeather(state, weatherDate) {
  console.log("getting weather")
  let request_url="https://crossorigin.me/https://api.darksky.net/forecast/8266ff95ef9bbfccf0ea24c325818f31/"
  let weather_str = weatherDate + "T00:00:00"
  request_url = request_url +  state.get('currentLat') + "," + state.get('currentLong')  + "," + weather_str
  console.log(request_url)
  let content = ""
  try {
   axios.get(request_url)
    .then(function(result) {
      content =  result.data.daily.data[0].summary
      console.log(result.data)
      return state.merge(Map({
        'weatherSummary': content
      }))
    })
    .catch(function (error) {
      content = "unable to retrieve weather data"
      console.log(error);
      return state.merge(Map({
        'weatherSummary': content
      }))
    });
  }
  catch(err) {
    console.log(err)
    return state.merge(Map({
      'weatherSummary': content
    }))
  }

  return state

}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'CHANGE_FILTER':
        return changeFilter(state, action.filter);
    case 'MARKER_CLICK':
        return onMarkerClick(state, action.marker)
    case 'ADD_MARKER':
        return addMarker(state, action.marker)
    case 'GET_WEATHER':
        return getWeather(state, action.weatherDate)
    default:
      return state
  }
}
