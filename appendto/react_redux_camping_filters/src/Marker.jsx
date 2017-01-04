import React from 'react';

export class Marker extends React.Component {

  /*componentWillUpdate(prevProps) {
    //if ((this.props.filters !== prevProps.filters) && prevProps.map) {
    if (prevProps.map) {
        this.renderMarker();
    }
  }*/
  componentDidUpdate(prevProps) {
    if (this.props.map !== prevProps.map) {
      this.renderMarker()
    }
  }

  renderMarker() {
    let {
      map, google, title, properties, description
    } = this.props;

    let lat = this.props.position.first()
    let long = this.props.position.last()
    let position = new google.maps.LatLng(lat,long);


    const pref = {
        map: map,
        position: position,
        title:title
      };
    this.marker = new google.maps.Marker(pref);
  }

  render() {
    return null;
  }
}
