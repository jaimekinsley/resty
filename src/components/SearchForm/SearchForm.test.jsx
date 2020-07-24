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
      jsonBody="{}"
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

  it('invokves the onChange prop whenever the method radio buttons are clicked', () => {
    wrapper.find('input[name="method"]').forEach(radioButton => {
      radioButton.simulate('change');
    });
    expect(handleChange).toHaveBeenCalledTimes(5);
  });

  it('has a textarea with a value set to jsonBody', () => {
    expect(wrapper.find('input[name="jsonBody"]').prop('value')).toEqual('{}');
  });

  it('invokes an onChange prop when the api input changes', () => {
    wrapper.find('input[name="api"]').simulate('change');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('invokes an onChange prop when the method radio button changes', () => {
    wrapper.find('input[value="get"]').simulate('change');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('invokes an onChange prop when the jsonBody input changes', () => {
    wrapper.find('input[name="jsonBody"]').simulate('change');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('invokes an onSubmit prop when submit button is clicked', () => {
    wrapper.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('renders the SearchForm component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

