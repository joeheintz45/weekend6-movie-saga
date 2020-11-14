import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddMovieItem from '../AddMovieItem/AddMovieItem';
import './AddMovie.css';

class AddMovie extends Component {
  state = {
    title: '',
    poster: '',
    description: '',
    genre: '',
  };

  componentDidMount() {
    this.props.dispatch({ type: 'GET_GENRES' });
  }

  handleSubmit = (event) => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input
          required
          onChange={this.handleTitle}
          type="text"
          placeholder="Movie Title"
        ></input>
        <input
          required
          onChange={this.handlePoster}
          type="text"
          placeholder="Poster Link"
        ></input>
        <input
          required
          onChange={this.handleDesc}
          type="text"
          placeholder="Description"
        ></input>
        <label>Genre</label>
        <select
          required
          onChange={this.handleGenre}
          name="genre"
          placeholder="Genre"
        >
          {this.props.store.genres.map((item, index) => (
            <AddMovieItem key={index} item={item} />
          ))}
        </select>
        <button onCLick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(AddMovie);
