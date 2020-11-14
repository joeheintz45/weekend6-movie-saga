import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailsItem from '../DetailsItem/DetailsItem';

class Details extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_GENRES',
      payload: this.props.store.itemReducer.id,
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.store.itemReducer.title}</h2>
        <img src={this.props.store.itemReducer.poster} alt="Movie Poster" />
        <br></br>
        {this.props.store.genres.map((item, index) => (
          <DetailsItem key={index} item={item} />
        ))}
        <p>{this.props.store.itemReducer.description}</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Details);
