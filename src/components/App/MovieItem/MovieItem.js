import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row } from 'react-bootstrap';

class MovieItem extends Component {
  handleClick = (event) => {
    this.props.history.push('/details');
    this.props.dispatch({ type: 'ITEM_CALL', payload: this.props.item });
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <li key={this.props.key}>
          <img src={this.props.item.poster} alt={this.props.item.title} />{' '}
          <br></br>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.description}</p>
        </li>
      </div>
    );
  }
}

export default withRouter(connect()(MovieItem));
