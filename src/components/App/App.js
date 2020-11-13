import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Details from './Details/Details';
import Home from './Home/Home';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          {/* ADD PAGES! */}
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
