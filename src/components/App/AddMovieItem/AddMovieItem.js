import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovieItem extends Component {
  render() {
    return <option value={this.props.item.id}>{this.props.item.name}</option>;
  }
}

export default connect()(AddMovieItem);
