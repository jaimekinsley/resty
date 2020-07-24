import React, { Component } from 'react';
import FilledRequest from '../components/FilledRequests/FilledRequests';
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

  render(){
    return <h1>in dev</h1>;
  }
}
