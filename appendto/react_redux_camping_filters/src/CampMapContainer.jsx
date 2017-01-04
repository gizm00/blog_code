import React from 'react';
import * as config from './config'
import GoogleApiComponent from './GoogleApiComponent'
import CampMap from './CampMap'
import CampFilterList from './CampFilterList'
import {Marker} from './Marker'

export class CampMapContainer extends React.Component {

  // adjust marker visibility to add/remove from map
  // marker.visible=false
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

      let sample_marker = { "title": "Huckleberry Mountain", "description": "Vault toilet", "position": [ 42.877807, -122.337174 ] }
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
            map={this.props.map}
            filters={this.props.filters}
            key={marker.get('title')}
            title={marker.get('title')}
            description={marker.get('description')}
            position={marker.get('position')}
            onClick={this.props.showInfoWindow}/>
        )}
      </CampMap>
    )
  }
}

// adds google to props
let key = config.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(CampMapContainer)
