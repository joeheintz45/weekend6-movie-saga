import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieItem extends Component {
  handleClick = (event) => {
    this.props.history.push('/details');
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <li key={this.props.key}>
          <img src={this.props.item.poster} alt={this.props.item.title} />{' '}
          <br></br>
          {this.props.item.title}
        </li>
      </div>
    );
  }
}

export default withRouter(MovieItem);
