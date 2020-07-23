import React from 'react';
import { shallow } from 'enzyme';
import Response from './Response';

jest.mock('../services/fetchAPI.js', () => ({
  fetchAPI() {
    return Promise.resolve([
      {
        'character': 'Bender',
        'quote': 'Bite my shiny metal ass.',
        'image': 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
      },
      {
        'character': 'Leela',
        'quote': '...at least here you\'ll be treated with dignity. Now strip naked and get on\nthe probulator.',
        'image': 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/leela.png'
      }]);
  }
}));

describe('Response Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Response />);
  });

  it();
});
