import React, { Component } from 'react';

class DetailsItem extends Component {
  render() {
    return <li>{this.props.details.name}</li>;
  }
}

export default DetailsItem;
