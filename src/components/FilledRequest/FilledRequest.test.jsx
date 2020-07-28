import React from 'react';
import { shallow } from 'enzyme';
import FilledRequest from './FilledRequest';

describe('FilledRequest component', () => {
  it('renders a FilledRequest', () => {
    const wrapper = shallow(<FilledRequest method="GET" api="https://futuramaapi.com" />);
    expect(wrapper).toMatchSnapshot();
  });
});
