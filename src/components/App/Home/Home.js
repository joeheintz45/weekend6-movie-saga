import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_MOVIE' });
  }

  render() {
    return (
      <ul>
        {this.props.store.movies.map((item, index) => (
          <MovieItem key={index} item={item} />
        ))}
      </ul>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Home);
