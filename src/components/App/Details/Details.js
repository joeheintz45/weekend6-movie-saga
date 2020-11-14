import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailsItem from '../DetailsItem/DetailsItem';
import './Details.css';

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
        <h2>{this.props.store.itemReducer.title}</h2>
        <div className="image">
          <img src={this.props.store.itemReducer.poster} alt="Movie Poster" />
        </div>
        <br></br>
        {this.props.store.details.map((item, index) => (
          <DetailsItem key={index} item={item} />
        ))}
        <p className="description">
          {this.props.store.itemReducer.description}
        </p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Details);
