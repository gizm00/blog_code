import React from 'react';
import CampListItem from './CampListItem'

export default class CampList extends React.Component {
  getCampgrounds() {
    return this.props.markers.filter(
      cg => cg.get('mapOn') === true
    )
  }
  render() {
    return (
      <div>
        {this.getCampgrounds().map(item =>
          <CampListItem {...this.props}
                  key={item.get('title')}
                  title={item.get('title')}
                  image={item.get('image')}
                  url={item.get('url')}
                  position={item.get('position')}
                  description={item.get('description')}
                  />
        )}
      </div>
  )}
  }
