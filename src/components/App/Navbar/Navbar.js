import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  addClick = (event) => {
    this.props.history.push('/add');
  };

  homeClick = (event) => {
    this.props.history.push('/');
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1>Movies!</h1>
        <button onClick={this.homeClick} type="button" className="btn btn-dark">
          Home
        </button>
        <button onClick={this.addClick} type="button" className="btn btn-dark">
          Add Movie
        </button>
      </nav>
    );
  }
}

export default withRouter(connect()(Navbar));
