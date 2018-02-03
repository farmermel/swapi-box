import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import swapiData, { mockSwapiData } from '../../helpers/helper';

jest.mock('../../helpers/helper');

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

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('has default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  })

  describe('componentDidMount', () => {
    it('calls fetchMovie and fetchPeople in componentDidMount', async () => {
      wrapper = shallow(<App />)

      await expect(swapiData.fetchMovie).toHaveBeenCalled();
      await expect(swapiData.fetchPeople).toHaveBeenCalled();
    })

    it('sets state with movie and people data', async () => {
      wrapper = shallow(<App />)
      let expectedPeople = {"favorite": false, "id": 1098234, "info": {"homeworld": "Naboo", "name": "Luke Skywalker", "species": "Human"}, "type": "peopleData"}

      await expect(swapiData.fetchMovie).toHaveBeenCalled();
      await expect(swapiData.fetchPeople).toHaveBeenCalled();
      
      expect(wrapper.state().movieData).toEqual({"date": "2017", "scroll": "BLAHBLAH STAR WARS", "title": "SITH"})
      expect(wrapper.state().peopleData).toEqual(expectedPeople);
    })
  })

  describe('getVehicles', () => {
    it('calls fetchVehicles if vehicleState doesn\'t have length', async () => {
      expect(wrapper.state().vehicleData.length).toEqual(0)

      await wrapper.instance().getVehicles();

      expect(swapiData.fetchVehicles).toHaveBeenCalled()
    })

    it('sets state if vehicleState doesn\'t have length', async () => {
      expect(wrapper.state().vehicleData.length).toEqual(0)

      await wrapper.instance().getVehicles();
      // console.log(wrapper.instance().getVehicles())
      // expect(wrapper.setState).toHaveBeenCalled()
      console.log(wrapper.instance().getVehicles())
      // expect(wrapper.state().vehicleData.length).toEqual(1)
    })

    it('does not set state if vehicleState has length', async () => {
      wrapper.instance().setState({ vehicleData: [ {some: 'fakeData'}]})
      expect(wrapper.state().vehicleData.length).toEqual(1);

      await wrapper.instance().getVehicles();

      expect(swapiData.fetchVehicles).not.toHaveBeenCalled()

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
