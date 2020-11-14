import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Details from './Details/Details';
import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import AddMovie from './AddMovie/AddMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
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
