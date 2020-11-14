import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Details from './Details/Details';
import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import AddMovie from './AddMovie/AddMovie';

class App extends Component {
  // Renders the entire app on the DOM
  // addClick = (event) => {
  //   this.props.history.push('/add');
  // };

  // homeClick = (event) => {
  //   this.props.history.push('/');
  // };

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <h1>Movies!</h1>
          <button onClick={this.homeClick} type="button" class="btn btn-dark">
            Home
          </button>
          <button onClick={this.addClick} type="button" class="btn btn-dark">
            Add Movie
          </button>
        </nav>
        <Router>
          {/* ADD PAGES! */}
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/add" component={AddMovie} />
        </Router>
      </div>
    );
  }
}

export default App;
