import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';

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

});
