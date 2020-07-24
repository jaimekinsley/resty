import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';
import { fetchAPI } from '../services/fetchAPI';

jest.mock('../services/fetchAPI.js', () => ({
  fetchAPI: jest.fn(() => Promise.resolve({ name: 'Bender' }))
}));

describe('MainContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainContainer />);
  });

  it('has api state', () => {
    expect(wrapper.state('api')).not.toBeUndefined();
  });

  it('has method state', () => {
    expect(wrapper.state('method')).not.toBeUndefined();
  });

  it('has jsonBody state', () => {
    expect(wrapper.state('jsonBody')).not.toBeUndefined();
  });

  it('has response state', () => {
    expect(wrapper.state('response')).not.toBeUndefined();
  });

  it('has a handleChange that updates the api state', () => {
    wrapper.instance().handleChange({
      target: {
        name: 'api',
        value: 'http:/futuramaapi.com'
      }
    });
    expect(wrapper.state('api')).toEqual('http:/futuramaapi.com');
  });

  it('has a handleChange that updates the method state', () => {
    wrapper.instance().handleChange({
      target: {
        name: 'method',
        value: 'POST'
      }
    });
    expect(wrapper.state('method')).toEqual('POST');
  });

  it('has a handleChange that updates the jsonBody state', () => {
    wrapper.instance().handleChange({
      target: {
        name: 'jsonBody',
        value: '{}'
      }
    });
    expect(wrapper.state('jsonBody')).toEqual('{}');
  });

  it('prevents default on submit', () => {
    const preventDefault = jest.fn();

    wrapper.instance().handleSubmit({
      preventDefault
    });
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('invokes the fetchAPI function on submit', () => {
    wrapper.setState({
      api: 'http:/futuramaapi.com'
    });
    wrapper.instance().handleSubmit({
      preventDefault: () => {}
    });
    expect(fetchAPI).toHaveBeenCalled();
    expect(fetchAPI).toHaveBeenCalledWith('http:/futuramaapi.com', 'GET', '');
  });

  it('invokves the fetchAPI function on submit and updates state', () => {
    return wrapper.instance().handleSubmit({
      preventDeault: () => {}
    })
      .then(() => {
        expect(wrapper.state('response')).toEqual({ name: 'Bender' });
      });
  });

});
