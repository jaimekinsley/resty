import React from 'react';
import { shallow } from 'enzyme';
import Response from './Response';

describe('Response Component', () => {
  let wrapper;
  beforeEach(() => {
    const response = [
      {
        'character': 'Bender',
        'quote': 'Bite my shiny metal ass.',
        'image': 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
      },
      {
        'character': 'Leela',
        'quote': '...at least here you\'ll be treated with dignity. Now strip naked and get on\nthe probulator.',
        'image': 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/leela.png'
      }];
    wrapper = shallow(<Response
      response={response} />);
  });

  it('displays a Response object or array', () => {
    expect(wrapper.find('response')).toBeDefined();
  });
});
