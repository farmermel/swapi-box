import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from './Card';
import mockData from '../../mock-data';

describe('Card', () => {
  it('matches the snapshot', () => {
    const cardData = mockData.cleaned.planet[0]
    let wrapper = shallow(<Card data={cardData}
                                toggleFav={jest.fn()}/>);

    expect(wrapper).toMatchSnapshot();
  })
})