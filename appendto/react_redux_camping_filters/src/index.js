import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import axios from 'axios';


import reducer from './reducer'
import {CampFilterAppContainer} from './CampFilterApp';
import './index.css';


const store = createStore(reducer)

function get_markers(features) {
  let markers = []
  features.forEach(feature => {
    markers.push({
      'title' : feature['properties']['title'],
      'description' : feature['properties']['description'],
      'position' : [feature['geometry']['coordinates'][1],
      feature['geometry']['coordinates'][0]]

    })
  });
  console.log(markers)
  return markers
}

// get markers and then set initial state
let geojson_url = 'https://raw.githubusercontent.com/gizm00/blog_code/master/appendto/python_maps_2/collection.geojson'
/*axios.get(geojson_url)
  .then(result => {
    let features = result['data']['features']
    set_state(get_markers(features))
  })*/

let features = [{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.166149, 42.865508]
  },
  "properties": {
    "flush": true,
    "shower": true,
    "vault": false,
    "description": "Flush toilet, Shower",
    "title": "Mazama",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.342876, 43.063217]
  },
  "properties": {
    "flush": false,
    "shower": false,
    "vault": true,
    "description": "Vault toilet",
    "title": "Claude Lewis Sno-Park-USFS",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.037881, 42.879145]
  },
  "properties": {
    "flush": true,
    "shower": false,
    "vault": false,
    "description": "Flush toilet",
    "title": "Lost Creek",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.330322, 43.056641]
  },
  "properties": {
    "flush": false,
    "shower": false,
    "vault": true,
    "description": "Vault toilet",
    "title": "Hamaker",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.337174, 42.877807]
  },
  "properties": {
    "flush": false,
    "shower": false,
    "vault": true,
    "description": "Vault toilet",
    "title": "Huckleberry Mountain",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.463867, 42.889648]
  },
  "properties": {
    "flush": false,
    "shower": false,
    "vault": true,
    "description": "Vault toilet",
    "title": "Natural Bridge -USFS",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.433105, 42.919678]
  },
  "properties": {
    "flush": false,
    "shower": false,
    "vault": false,
    "description": "",
    "title": "Farewell Bend",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-121.924772, 42.884588]
  },
  "properties": {
    "flush": false,
    "shower": false,
    "vault": true,
    "description": "Vault toilet",
    "title": "Scott Creek",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.324644, 42.913045]
  },
  "properties": {
    "flush": false,
    "shower": false,
    "vault": true,
    "description": "Vault toilet",
    "title": "Thousand Springs Sno-Park-USFS",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.45, 42.9102777778]
  },
  "properties": {
    "flush": false,
    "shower": false,
    "vault": true,
    "description": "Vault toilet",
    "title": "Union Creek",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.4353305556, 42.9162388889]
  },
  "properties": {
    "flush": false,
    "shower": false,
    "vault": false,
    "description": "",
    "title": "Farewell Bend Campground",
    "marker-size": "small"
  }
}]

set_state(get_markers(features))

function set_state(markers) {
  store.dispatch ({
  type: 'SET_STATE',
  state: {
    filters: [
      {id: 'shower', inuse: false },
      {id: 'pets', inuse: false },
      {id: 'flush', inuse: false },
      {id: 'water', inuse: false }
    ],
    markers: markers
  }
 })
}

ReactDOM.render(
  <Provider store={store}>
  <CampFilterAppContainer />
</Provider>,
  document.getElementById('root')
);
