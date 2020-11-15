import React, { Component } from 'react';
import './DetailsItem.css';

class DetailsItem extends Component {
  // all of the genres that are selected from the get
  render() {
    return (
      <span>
        <h3>{this.props.item.name}</h3>
      </span>
    );
  }
}

export default DetailsItem;
