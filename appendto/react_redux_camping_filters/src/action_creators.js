import fetch from 'isomorphic-fetch'


export function changeFilter(filter) {
  return {
    type: 'CHANGE_FILTER',
    filter
  }
}

export function onMarkerClick(marker) {
  return {
    type: 'MARKER_CLICK',
    marker
  }
}

export function addMarker(marker) {
    return {
      type: 'ADD_MARKER',
      marker
    }
}

export function reqWeather(weatherDate) {
    return {
      type: 'REQ_WEATHER',
      weatherDate
    }
}

export function recvWeather(weatherDate, result) {
    return {
      type: 'RECV_WEATHER',
      weatherDate,
      response: result
    }
}

export function fetchWeather(weatherDate, currentLat, currentLong) {
  let request_url="https://crossorigin.me/https://api.darksky.net/forecast/8266ff95ef9bbfccf0ea24c325818f31/"
  let weather_str = weatherDate + "T00:00:00"
  console.log(weatherDate)
  request_url = request_url +  currentLat + "," + currentLong  + "," + weather_str

    return function (dispatch) {
       dispatch(reqWeather(weatherDate))
       return fetch(request_url)
        .then(response => response.json())
        .catch(error => {
          console.log("unable to get weather " + error)
        })
          .then(respData => {
            console.log(respData)
            dispatch(recvWeather(weatherDate, respData))
          })
          .catch(error => {
            console.log("unable to parse weather result " + error)
          })
      }
}
