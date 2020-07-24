import React from 'react';
import { shallow } from 'enzyme';
import Response from './Response';

describe('Response Component', () => {

  it('displays a Response object or array', () => {
    const wrapper = shallow(<Response response={[
      {
        'character': 'Bender',
        'quote': 'Bite my shiny metal ass.',
        'image': 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
      },
      {
        'character': 'Leela',
        'quote': '...at least here you\'ll be treated with dignity. Now strip naked and get on\nthe probulator.',
        'image': 'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904145/leela.png'
      }
    ]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
