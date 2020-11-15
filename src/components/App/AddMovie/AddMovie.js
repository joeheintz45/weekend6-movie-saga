import { TextField } from 'material-ui';
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

  // mounts the get for all of the genres in the dropdown
  componentDidMount() {
    this.props.dispatch({ type: 'GET_GENRES' });
  }

  // changes the state to the input values
  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  // submits the new state to be posted to the server and takes user back to movie list
  handleSubmit = (event) => {
    this.props.dispatch({ type: 'POST_MOVIE', payload: this.state });
    this.props.history.push('/');
  };

  // takes user back to movie list without submitting movie
  handleCancel = (event) => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="input">
          <input
            required
            onChange={this.handleChangeFor('title')}
            type="text"
            placeholder="Title"
          ></input>
          <input
            required
            onChange={this.handleChangeFor('poster')}
            type="text"
            placeholder="Poster Link"
          ></input>
          <br></br>
          <input
            className="textbox form-control"
            id="exampleFormControlTextarea1"
            required
            onChange={this.handleChangeFor('description')}
            type="text"
            placeholder="Description"
          ></input>
          <br></br>
          <label>Genre:</label>
          <br></br>
          <select
            required
            onChange={this.handleChangeFor('genre_id')}
            name="genre"
            placeholder="Genre"
          >
            {/* maps through the genres in the database and puts them in the dropdown */}
            {this.props.store.genres.map((item, index) => (
              <AddMovieItem key={index} item={item} />
            ))}
          </select>
          <div>
            <button
              type="button"
              class="btn btn-danger"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-success"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// store of all the reducers values
const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(AddMovie);
