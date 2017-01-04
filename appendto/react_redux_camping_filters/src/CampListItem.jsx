import React from 'react';

export default class CampListItem extends React.Component {

  render() {
    let latlng_str = parseFloat(this.props.position.first()).toFixed(3) + "," + parseFloat(this.props.position.last()).toFixed(3)
    let maps_url = "http://www.google.com/maps?q=" + latlng_str
    return (
      <div className="col-sm-3" style={{"marginBottom":20}}>
        <div className="row">
          <div>
            <img src={this.props.image} style={{width:200, height:100}}></img>
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
