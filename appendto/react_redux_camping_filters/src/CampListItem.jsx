import React from 'react';

export default class CampListItem extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.activeMarker !== prevProps.activeMarker) {
      let img_ref = this.refs.cg_image
      if (this.props.showingInfoWindow && (this.props.selectedTitle === this.props.title)) {
        img_ref.style.border = "1px solid black"
      }
      else {
        img_ref.style.border = null
      }
    }
  }

  getMarker(title_match) {
    let match_list = this.props.markers.filter(item =>
      item.get('title') === title_match
    )
    if (match_list) {
      return match_list.first()
    }
    else {
      return null;
    }
  }

  render() {
    let latlng_str = parseFloat(this.props.position.first()).toFixed(3) + "," + parseFloat(this.props.position.last()).toFixed(3)
    let maps_url = "http://www.google.com/maps?q=" + latlng_str
    let img_url = "http://campnear.me/react_app_images/" +  this.props.image
    let marker_match = this.getMarker(this.props.title)
    return (
      <div className="col-sm-3" style={{"marginBottom":20}}>
        <div className="row">
          <div>
            <img src={img_url} ref="cg_image" style={{width:200, height:100}} onClick={() =>this.props.onMarkerClick(this.getMarker(this.props.title))}></img>
          </div>
          <div>
              <a href={this.props.url} target="_blank">{this.props.title}</a><br></br>
              <a href={maps_url} target="_blank">{latlng_str}</a>
          </div>
        </div>
      </div>
      )
  }
}
