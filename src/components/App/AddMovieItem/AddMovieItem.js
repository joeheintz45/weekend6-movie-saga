import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovieItem extends Component {
  render() {
    return <option value={this.props.item.name}>{this.props.item.name}</option>;
  }
}

export default connect()(AddMovieItem);
