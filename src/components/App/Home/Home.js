import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import Navbar from '../Navbar/Navbar';
import './Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_MOVIE' });
  }

  render() {
    return (
      <div className="pagecolor">
        <Navbar />
        <div className="row">
          {this.props.store.movies.map((item, index) => (
            <MovieItem key={index} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Home);
