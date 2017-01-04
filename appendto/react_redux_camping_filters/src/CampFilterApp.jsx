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
  return {
    filters: state.get('filters'),
    markers: state.get('markers'),
    campgrounds: state.get('campgrounds')
  };
}

export const CampFilterAppContainer = connect(mapStateToProps,actionCreators)(CampFilterApp);
