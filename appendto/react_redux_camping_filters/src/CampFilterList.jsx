import React from 'react';
import {ButtonGroup} from 'react-bootstrap';
import CampFilter from './CampFilter'

export default class CampFilterList extends React.Component {
  getFilters() {

    if (this.props.filters) {
      console.log("Get Filters" + this.props.filters)
      return this.props.filters
    }
    return [];
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-2">Campground Filters:</div>
        {this.getFilters().map(item =>
          <CampFilter id={item.get('id')}
                  key={item.get('id')}
                  changeFilter={this.props.changeFilter}
                  />
        )}
      </div>
  )}
}
