import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './action_creators';
import './App.css';
import CampFilterList from './CampFilterList';

export class CampFilterApp extends React.Component {

  checkFilters(marker) {
    let keep = true
    this.props.filters.forEach(
      filter => {
        if (!marker.properties[filter]) {
          keep = false
        }
      }
    );

    if (keep) {
      marker.setmap(self.props.map)
    }
    else {
      // marker.removemap (?)
    }
  }
  setVisibleMarkers() {
    if (this.props.markers) {
      this.props.markers.forEach(marker => {
        this.checkFilters(marker)
      });
    }
  }
  render() {
    return (
      <div>
        <CampFilterList {...this.props}/>
      </div>
  )};
}


function mapStateToProps(state) {
  return {
    filters: state.get('filters'),
    markers: state.get('markers')
  };
}

export const CampFilterAppContainer = connect(mapStateToProps,actionCreators)(CampFilterApp);
