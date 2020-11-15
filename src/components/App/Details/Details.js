import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailsItem from '../DetailsItem/DetailsItem';
import Navbar from '../Navbar/Navbar';
import './Details.css';

class Details extends Component {
  // mounts the get for the assigned genres of the movie selected
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_DETAILS',
      payload: this.props.store.itemReducer.id,
    });
  }

  // takes user back to movie list
  handleList = (event) => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Navbar />
        <h2>{this.props.store.itemReducer.title}</h2>
        <div className="image">
          <img src={this.props.store.itemReducer.poster} alt="Movie Poster" />
        </div>
        <br></br>
        {/* maps through the genres associated with the specific movie */}
        {this.props.store.details.map((item, index) => (
          <DetailsItem key={index} item={item} />
        ))}
        <p className="description">
          {this.props.store.itemReducer.description}
        </p>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={this.handleList}
        >
          Back To List
        </button>
      </div>
    );
  }
}

// store of all data in reducers
const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Details);
