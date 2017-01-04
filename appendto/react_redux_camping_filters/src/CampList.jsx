import React from 'react';
import CampListItem from './CampListItem'

export default class CampList extends React.Component {
  getList() {
    if (this.props.campgrounds) {
      console.log("Get List" + this.props.campgrounds)
      return this.props.campgrounds
    }
    return [];
  }
  render() {
    return (
      <div>

        {this.getList().map(item =>
          <CampListItem
                  key={item.get('title')}
                  title={item.get('title')}
                  description={item.get('description')}
                  />

        )}

      </div>
  )}
  }
