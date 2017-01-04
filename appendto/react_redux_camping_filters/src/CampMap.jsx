import React from 'react';
import ReactDOM from 'react-dom';

export default class CampMap extends React.Component {

  renderChildren() {
    const {children} = this.props;
    if (!children) return;
    return React.Children.map(children, c => {
     return React.cloneElement(c, {
       map: this.map,
       google: this.props.google
     });
   })
  }

  componentDidMount() {
    console.log("component did mount")
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      console.log("component did update")
      this.loadMap();
      this.forceUpdate()
   }
  }

  // called after the component renders
  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      console.log('prepping map')
      const {google} = this.props;
      const maps = google.maps;

    // since the component has already rendered we can grab
    // a ref to the map div so we can properly load the map
    // this is not super react-ish, since ideally React alone
    // touches the DOM
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 10;
      let lat = 42.9456;
      let lng = -122.2;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })

      this.map = new maps.Map(node, mapConfig);
      console.log("Setting map on " + this.map)
    }

  //
  }

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style} ref='map'>
        {this.renderChildren()}
        Loading map...
      </div>
    )
  }
}
