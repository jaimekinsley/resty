import React, { Component } from 'react';
import { fetchAPI } from '../services/fetchAPI';

export default class MainContainer extends Component {
  state = {
    api: '',
    method: 'GET',
    jsonBody: '',
    response: {}
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { api, method, jsonBody } = this.state;
    return fetchAPI(api, method, jsonBody)
      .then(response => this.setState({ response }));
  }

  render(){
    return <h1>in dev</h1>;
  }
}
