import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddMovieItem from '../AddMovieItem/AddMovieItem';
import Navbar from '../Navbar/Navbar';
import './AddMovie.css';

class AddMovie extends Component {
  state = {
    title: '',
    poster: '',
    description: '',
    genre_id: '',
  };

  componentDidMount() {
    this.props.dispatch({ type: 'GET_GENRES' });
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.props.dispatch({ type: 'POST_MOVIE', payload: this.state });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Navbar />
        <input
          required
          onChange={this.handleChangeFor('title')}
          type="text"
          placeholder="Movie Title"
        ></input>
        <input
          required
          onChange={this.handleChangeFor('poster')}
          type="text"
          placeholder="Poster Link"
        ></input>
        <input
          required
          onChange={this.handleChangeFor('description')}
          type="text"
          placeholder="Description"
        ></input>
        <label>Genre</label>
        <select
          required
          onChange={this.handleChangeFor('genre_id')}
          name="genre"
          placeholder="Genre"
        >
          {this.props.store.genres.map((item, index) => (
            <AddMovieItem key={index} item={item} />
          ))}
        </select>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(AddMovie);
