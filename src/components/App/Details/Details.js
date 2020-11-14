import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailsItem from '../DetailsItem/DetailsItem';

class Details extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_DETAILS',
      payload: this.props.store.itemReducer.id,
    });
  }

  render() {
    return (
      <div>
        <h3>{this.props.store.itemReducer.title}</h3>
        <img src={this.props.store.itemReducer.poster} alt="Movie Poster" />
        {this.props.store.details.map((item, index) => (
          <DetailsItem key={index} item={item} />
        ))}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Details);
