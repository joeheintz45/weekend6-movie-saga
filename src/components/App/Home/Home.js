import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_MOVIE' });
  }

  render() {
    return <ul>{this.props.store.movies.map}</ul>;
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Home);
