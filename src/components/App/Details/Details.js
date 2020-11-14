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
    const array = this.props.store.details.map((item, index) => (
      <DetailsItem key={index} details={item} />
    ));

    return <ul>{array}</ul>;
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(Details);
