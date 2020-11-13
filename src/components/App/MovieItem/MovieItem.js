import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {
  render() {
    return (
      <div>
        <li key={this.props.key}>
          <img src={this.props.item.poster} alt={this.props.item.title} />{' '}
          <br></br>
          {this.props.item.title}
        </li>
      </div>
    );
  }
}

export default MovieItem;
