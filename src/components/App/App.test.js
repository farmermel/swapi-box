import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import swapiData, { mockSwapiData } from '../../helpers/helper';

jest.mock('../../helpers/helper')
// import * as swapiData from '../../helpers/__mocks__/helper.js';


describe('App', () => {
  let wrapper;
  let defaultState;

  beforeEach(() => {
    wrapper = shallow(<App />, {disableLifecycleMethods: true})
    defaultState = {
      movieData: {},
      peopleData: [],
      vehicleData: [],
      planetData: [],
      favorites: []
    }
  })

  it('renders without crashing', () => {

    // let wrapper = shallow(<BrowserRouter><App /></BrowserRouter>, {disableLifeCycleMethods: true})
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('has default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  })

  describe('componentDidMount', () => {
    it('calls fetchMovie and fetchPeople in componentDidMount', async () => {
      // wrapper = shallow(<App />)
      expect(mockSwapiData.__fetchMovie()).toEqual()
    })

    it('sets state with movie and people data', () => {

    })
  })

  describe('getVehicles', () => {
    it('sets state if vehicleState doesn\'t have length', () => {

    })

    it('does not set state if vehicleState has length', () => {

    })
  })

  describe('getPlanets', () => {
    it('sets state if planetState doesn\'t have length', () => {

    })

    it('does not set state if planetState has length', () => {

    })
  })

  describe('toggleFav', () => {




  })


})
