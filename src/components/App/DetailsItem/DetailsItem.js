import React, { Component } from 'react';

class DetailsItem extends Component {
  render() {
    return <h4>{this.props.item.name}</h4>;
  }
}

export default DetailsItem;
