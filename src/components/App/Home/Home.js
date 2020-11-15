import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import Navbar from '../Navbar/Navbar';
import './Home.css';

class Home extends Component {
  // mounts the get of all the movies in the database
  componentDidMount() {
    this.props.dispatch({ type: 'GET_MOVIE' });
  }

  render() {
    return (
      <div className="pagecolor">
        <Navbar />
        <div className="row">
          {/* maps through all th emovies to be rendered */}
          {this.props.store.movies.map((item, index) => (
            <MovieItem key={index} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

// store of all data in the reducers
const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Home);
