import React from 'react';
import { shallow } from 'enzyme';
import FilledRequests from './FilledRequests';
import FilledRequest from '../FilledRequest/FilledRequest';


describe('FilledRequests component', () => {
  let wrapper;
  beforeEach(() => {
    const filledRequests = [
      { method: 'get', api: 'http://firstrequest.com' },
      { method: 'put', api: 'http://secondrequest.com' }
    ];
    wrapper = shallow(<FilledRequests filledRequests={filledRequests} />);
  });

  it('displays a list of two FilledRequest components', () => {
    expect(wrapper.find(FilledRequest)).toHaveLength(2);
  });
});
