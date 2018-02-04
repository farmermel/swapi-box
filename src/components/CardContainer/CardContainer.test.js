import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';
import mockData from '../../mock-data';

describe('CardContainer', () => {
  it('matches the snapshot', () => {
    const cardData = mockData.cleaned.planet;
    let wrapper = shallow(<CardContainer cardData={cardData}
                                toggleFav={jest.fn()}/>);

    expect(wrapper).toMatchSnapshot();
  })
})