import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './MovieItem.css';

class MovieItem extends Component {
  handleClick = (event) => {
    this.props.history.push('/details');
    this.props.dispatch({ type: 'ITEM_CALL', payload: this.props.item });
  };

  render() {
    return (
      <div
        key={this.props.key}
        onClick={this.handleClick}
        className="col-2 spacer"
      >
        <div className="background">
          <img src={this.props.item.poster} alt={this.props.item.title} />{' '}
          <br></br>
          <h5>{this.props.item.title}</h5>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(MovieItem));
