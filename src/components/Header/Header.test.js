import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('matches the snapshot', () => {
    let wrapper = shallow(<Header getPlanets={jest.fn()}
                                  getVehicles={jest.fn()}/>);

    expect(wrapper).toMatchSnapshot();
  })
})