import React from 'react';
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
      <div>
      <ul>
        {this.getFilters().map(item =>
          <CampFilter id={item.get('id')}
                  key={item.get('id')}
                  changeFilter={this.props.changeFilter}
                  />

        )}
      </ul>
      </div>
  )}
}
