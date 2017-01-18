import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom'
import {Jumbotron} from 'react-bootstrap';
import * as actionCreators from './action_creators';
import './App.css';
import CampFilterList from './CampFilterList';
import CampList from './CampList';
import CampMapContainer from './CampMapContainer';
import _ from 'underscore'
import * as config from './config'
import GoogleApiComponent from './GoogleApiComponent'

export class CampFilterApp extends React.Component {

  render() {
    return (
      <div className="container">
        <Jumbotron>
          <h1>Crater Lake Camping</h1>
        </Jumbotron>
        <br></br>
        <CampFilterList {...this.props}/>
        <br></br>
        <CampMapContainer {...this.props} />


      </div>
  )};
}

function getIndex(state, objName, field, itemId) {
  return state.get(objName).findIndex(
    (item) => item.get(field) === itemId
  );
}


function mapStateToProps(state) {
  return {
    filters: state.get('filters'),
    markers: state.get('markers'),
    showingInfoWindow: state.get('showingInfoWindow'),
    activeMarker: state.get('activeMarker'),
    selectedTitle: state.get('selectedTitle'),
    gmapMarkers: state.get('gmapMarkers')
  };
}


export const CampFilterAppContainer = connect(mapStateToProps,actionCreators)(CampFilterApp);
