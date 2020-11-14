import React, { Component } from 'react';
import './DetailsItem.css';

class DetailsItem extends Component {
  render() {
    return (
      <span>
        <h3>{this.props.item.name}</h3>
      </span>
    );
  }
}

export default DetailsItem;
