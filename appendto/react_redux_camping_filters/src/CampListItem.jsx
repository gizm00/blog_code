import React from 'react';

export default class CampListItem extends React.Component {
  render() {
    return (
      <div>
      {this.props.title}
        <br></br>
        {this.props.description}
      </div>
      )
  }
}
