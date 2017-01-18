import React from 'react';
import * as config from './config'
import GoogleApiComponent from './GoogleApiComponent'
import CampMap from './CampMap'
import {Marker} from './Marker'
import {InfoWindow} from './InfoWindow'
import CampList from './CampList'

export class CampMapContainer extends React.Component {
  render() {
    return (
      <div>
      <CampMap google={this.props.google}>
        {this.props.markers.map(marker =>
          <Marker
            key={marker.get('title')}
            title={marker.get('title')}
            description={marker.get('description')}
            properties={marker.get('properties')}
            position={marker.get('position')}
            mapOn={marker.get('mapOn')}
            addMarker={this.props.addMarker}
            onMarkerClick={this.props.onMarkerClick}/>

        )}
        <InfoWindow {...this.props}
            marker={this.props.activeMarker}
            visible={this.props.showingInfoWindow}>
              <div>
                <h4>{this.props.selectedTitle}</h4>
              </div>
          </InfoWindow>
      </CampMap>
      <br></br>
      <CampList {...this.props}/>
      </div>
    )}
}

let key = config.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(CampMapContainer)
