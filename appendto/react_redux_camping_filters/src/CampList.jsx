import React from 'react';
import CampListItem from './CampListItem'

export default class CampList extends React.Component {
  render() {
    return (
      <div>
        {this.props.campgrounds.map(item =>
          <CampListItem
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
