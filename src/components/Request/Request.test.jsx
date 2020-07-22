import React from 'react';
import { shallow } from 'enzyme';
import Request from './Request';

describe('Request component', () => {
  it('renders a Request', () => {
    const wrapper = shallow(<Request method="get" api="https://futuramaapi.com" />);
    expect(wrapper).toMatchSnapshot();
  });
});
