import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './action_creators';
import './App.css';
import CampFilterList from './CampFilterList';
import CampList from './CampList';
import CampMapContainer from './CampMapContainer';

export class CampFilterApp extends React.Component {

  render() {
    return (
      <div>
        <CampFilterList {...this.props}/>
        <CampList {...this.props}/>
        <CampMapContainer {...this.props}
                map={this.props.map}
                markers={this.props.markers}
                filters={this.props.filters}
                markerClick={this.props.markerClick}/>

      </div>
  )};
}


function mapStateToProps(state) {
  let filters = state.get('filters')
  let campgrounds = state.get('campgrounds')
  let filtered_campgrounds = campgrounds
  let active_filters = filters.filter(
    item => item.get('inuse') === true
  )
  active_filters.forEach(filter => {
    filtered_campgrounds = campgrounds.filter(
      item => item.get('properties').get(filter.get('id')) === true
    )
  })

  return {
    filters: filters,
    markers: state.get('markers'),
    campgrounds: filtered_campgrounds
  };
}

export const CampFilterAppContainer = connect(mapStateToProps,actionCreators)(CampFilterApp);
