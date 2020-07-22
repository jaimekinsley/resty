import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm component', () => {
  let handleChange;
  let handleSubmit;
  let wrapper;

  beforeEach(() => {
    handleChange = jest.fn();
    handleSubmit = jest.fn();
    wrapper = shallow(<SearchForm
      api="https://www.futuramaapi.herokuapp.com"
      method="patch"
      jsonBody="{ 'name': 'bender' }"
      onChange={handleChange}
      onSubmit={handleSubmit}
    />);
  });

  it('has an input with a value set to api', () => {
    expect(wrapper.find('input[name="api"]').prop('value')).toEqual('https://www.futuramaapi.herokuapp.com');
  });

  it('has an radio button with a value set to PATCH', () => {
    expect(wrapper.find('input[name="method"]').findWhere(radios => radios.prop('checked')).prop('value')).toEqual('patch');
  });

});

