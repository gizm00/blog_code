import React from 'react';
import * as config from './config'
import GoogleApiComponent from './GoogleApiComponent'
import CampMap from './CampMap'
import {Marker} from './Marker'

export class CampMapContainer extends React.Component {

  getMarkers() {
    //const pos = {lat: 37.759703, lng: -122.428093}
    console.log("get markers")
    if (this.props.filters && this.props.markers) {
      let active_markers = this.props.markers
      let active_filters = this.props.filters.filter(
        item => item.get('inuse') === true
      )
      console.log("active filters " + active_filters)

      active_filters.forEach(filter => {
        active_markers = active_markers.filter(
          marker => marker.get('properties').get(filter.get('id')) === true
        )
      })
      console.log("active markers:" + active_markers)
      return active_markers
    }
    return []
  }

  render() {

    return (
      <CampMap google={this.props.google}>
        {this.getMarkers().map(marker =>
          <Marker
            key={marker.get('title')}
            title={marker.get('title')}
            description={marker.get('description')}
            properties={marker.get('properties')}
            position={marker.get('position')}
            onClick={this.props.showInfoWindow}/>
        )}
      </CampMap>
    )
  }
}

let key = config.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(CampMapContainer)
