import React, { Component } from 'react';
import { fetchAPI } from '../services/fetchAPI';
import SearchForm from '../components/SearchForm/SearchForm';
import Response from '../components/Response/Response';
import FilledRequests from '../components/FilledRequests/FilledRequests';

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
    const { api, method, jsonBody, response } = this.state;

    return (
      <>
        <SearchForm
          api={api}
          method={method}
          jsonBody={jsonBody}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Response response={response} />
        {/* <FilledRequests
          api={api}
          method={method}
        /> */}
      </>
    );
  }
}
