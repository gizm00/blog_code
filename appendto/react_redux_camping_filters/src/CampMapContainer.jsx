import React from 'react';
import * as config from './config'
import GoogleApiComponent from './GoogleApiComponent'
import CampMap from './CampMap'
import {Marker} from './Marker'

export class CampMapContainer extends React.Component {

  render() {
    return (
      <CampMap google={this.props.google}>
        {this.props.markers.map(marker =>
          <Marker
            key={marker.get('title')}
            title={marker.get('title')}
            description={marker.get('description')}
            properties={marker.get('properties')}
            position={marker.get('position')}
            mapOn={marker.get('mapOn')}
            onClick={this.props.showInfoWindow}/>
        )}
      </CampMap>
    )}
}

let key = config.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(CampMapContainer)
