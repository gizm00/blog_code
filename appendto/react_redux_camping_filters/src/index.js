import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore} from 'redux';

import reducer from './reducer'
import {CampFilterAppContainer} from './CampFilterApp';
import './index.css';

const store = createStore(reducer)

// Set initial state
store.dispatch ({
  type: 'SET_STATE',
  state: {
    filters: [
      {id: 'shower', inuse: false },
      {id: 'pets', inuse: false },
      {id: 'flush', inuse: false },
      {id: 'water', inuse: false }
    ],
    markers: [
      // geojson markers with properties.filter, i.e.
      // {properties: [shower:true, pets:false, flush:true, water:true]}
    ]
  }
})

ReactDOM.render(
  <Provider store={store}>
  <CampFilterAppContainer />
</Provider>,
  document.getElementById('root')
);
