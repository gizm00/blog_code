import React from 'react'
import ReactDOMServer from 'react-dom/server'

export class InfoWindow extends React.Component {

  openWindow() {
   this.infowindow
     .open(this.props.map, this.props.marker);
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
