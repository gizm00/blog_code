import React from 'react'
import ReactDOMServer from 'react-dom/server'

export class InfoWindow extends React.Component {

  createMarkerObject(marker) {
    // create a google maps marker object to pass to the reducer
    let {
      map, google, title, properties, description
    } = this.props;

    let lat = marker.get('position').first()
    let long = marker.get('position').last()
    let position = new google.maps.LatLng(lat,long);

    const pref = {
        map: map,
        position: position,
        title:title
      };

    let new_marker =  new google.maps.Marker(pref);
    if (!marker.get('mapOn')) {
      new_marker.setMap(null);
    }
    else {
      new_marker.setMap(map)
    }

    return new_marker;
  }

  openWindow() {
    let marker = this.props.marker
    if (!this.props.marker.position) {
      // need to convert marker into google maps marker object
      marker = this.props.gmapMarkers.filter(marker =>
        marker.title == this.props.marker.get('title'))
      marker = marker.first()
    }
     this.infowindow
       .open(this.props.map, marker);
   }
   closeWindow() {
     this.infowindow.close();
   }

  renderChildren() {
    const {children} = this.props;
    return ReactDOMServer.renderToString(children);
  }

  updateContent() {
    if (this.props.map) {
      const content = this.renderChildren();
      this.infowindow
        .setContent(content);
    }
  }

  componentDidUpdate(prevProps, prevState) {


    if (this.props.map !== prevProps.map) {
      this.renderInfoWindow();
    }

    if ((this.props.visible !== prevProps.visible) ||
        (this.props.marker !== prevProps.marker)) {
      this.props.visible ?
        this.openWindow() :
        this.closeWindow();
    }

    if (this.props.children !== prevProps.children) {
      this.updateContent();
    }
  }


  renderInfoWindow() {
    let {map, google} = this.props;

    const iw = this.infowindow = new google.maps.InfoWindow({
      content: ''
    });
  }

  render() {
    return null;
  }
}
