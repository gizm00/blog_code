import React from 'react';
import {ButtonGroup} from 'react-bootstrap';
import CampFilter from './CampFilter'

export default class CampFilterList extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-sm-4">Campground Filters:</div>
        {this.props.filters.map(item =>
          <CampFilter id={item.get('id')}
                  key={item.get('id')}
                  changeFilter={this.props.changeFilter}
                  />
        )}
      </div>
  )}
}
