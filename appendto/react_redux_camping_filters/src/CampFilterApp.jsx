import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom'
import {Jumbotron} from 'react-bootstrap';
import * as actionCreators from './action_creators';
import './App.css';
import CampFilterList from './CampFilterList';
import CampList from './CampList';


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
        <CampList {...this.props}/>

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
    filtered_campgrounds = filtered_campgrounds.filter(
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
