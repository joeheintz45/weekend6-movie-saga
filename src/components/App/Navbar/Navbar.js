import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

// navbar to navigate the pages
class Navbar extends Component {
  // takes user to add movie page
  addClick = (event) => {
    this.props.history.push('/add');
  };

  // takes user to the movie list page
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
