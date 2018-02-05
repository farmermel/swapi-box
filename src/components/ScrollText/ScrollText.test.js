import React from 'react';
import { shallow } from 'enzyme';
import ScrollText from './ScrollText';
import mockData from '../../mock-data';

describe('ScrollText', () => {
  it('matches the snapshot', () => {
    const movieData = mockData.cleaned.film;
    let wrapper = shallow(<ScrollText movieData={movieData} />);

    expect(wrapper).toMatchSnapshot();
  });
});