import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import mockData from '../../mock-data';
import App from './App';
import swapiData, { mockSwapiData } from '../../helpers/helper';

jest.mock('../../helpers/helper');

describe('App', () => {
  let wrapper;
  let defaultState;

  beforeEach(() => {
    wrapper = shallow(<App />, {disableLifecycleMethods: true});
    defaultState = {
      movieData: {},
      peopleData: [],
      vehicleData: [],
      planetData: [],
      favorites: [],
      translated: false
    }
  });

  afterEach(() => {
    swapiData.fetchVehicles.mockClear();
    swapiData.fetchPlanets.mockClear();
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('has default state', () => {
    expect(wrapper.state()).toEqual(defaultState);
  })

  describe('componentDidMount', () => {
    it('calls fetchMovie and fetchPeople in componentDidMount', async () => {
      wrapper = shallow(<App />);

      await expect(swapiData.fetchMovie).toHaveBeenCalled();
      await expect(swapiData.fetchPeople).toHaveBeenCalled();
    })

    it('sets state with movie and people data', async () => {
      wrapper = shallow(<App />);
      let expectedPeople = {"favorite": false, "id": 1098234, "info": {"homeworld": "Naboo", "name": "Luke Skywalker", "species": "Human"}, "type": "peopleData"}

      await expect(swapiData.fetchMovie).toHaveBeenCalled();
      await expect(swapiData.fetchPeople).toHaveBeenCalled();
      
      expect(wrapper.state().movieData).toEqual({"date": "2017", "scroll": "BLAHBLAH STAR WARS", "title": "SITH"})
      expect(wrapper.state().peopleData).toEqual(expectedPeople);
    })
  })

  describe('getVehicles', () => {
    it('calls fetchVehicles if vehicleState doesn\'t have length', async () => {
      expect(wrapper.state().vehicleData.length).toEqual(0);

      await wrapper.instance().getVehicles();

      expect(swapiData.fetchVehicles).toHaveBeenCalled();
    })

    it('sets state if vehicleState doesn\'t have length', async () => {
      expect(wrapper.state().vehicleData.length).toEqual(0);

      await wrapper.instance().getVehicles();

      expect(wrapper.state().vehicleData.length).toEqual(1);
    })

    it('does not set state if vehicleState has length', async () => {
      wrapper.instance().setState({ vehicleData: [ {some: 'fakeData'}]})
      expect(wrapper.state().vehicleData.length).toEqual(1);

      await wrapper.instance().getVehicles();

      expect(swapiData.fetchVehicles).not.toHaveBeenCalled();
    })
  })

  describe('getPlanets', () => {
    it('sets state if planetState doesn\'t have length', async () => {
      expect(wrapper.state().planetData.length).toEqual(0);

      await wrapper.instance().getPlanets();

      expect(wrapper.state().planetData.length).toEqual(1);
    })

    it('does not set state if planetState has length', async () => {
      wrapper.instance().setState({ planetData: [ {some: 'fakeData'}]});
      expect(wrapper.state().planetData.length).toEqual(1);

      await wrapper.instance().getPlanets();

      expect(swapiData.fetchPlanets).not.toHaveBeenCalled();
    })
  })

  describe('toggleFav', () => {
    it('toggles favorite value on card given that card', async () => {
      wrapper.instance().setState({ planetData: mockData.cleaned.planet });
      expect(wrapper.state().planetData[0].favorite).toEqual(false);

      wrapper.instance().toggleFav(mockData.cleaned.planet[0]);

      expect(wrapper.state().planetData[0].favorite).toEqual(true);

      wrapper.instance().toggleFav(mockData.cleaned.planet[0]);

      expect(wrapper.state().planetData[0].favorite).toEqual(false);
    })

    it('adds card to favorites array', () => {
      expect(wrapper.state().favorites.length).toEqual(0);

      wrapper.instance().toggleFav(mockData.cleaned.planet[0]);

      expect(wrapper.state().favorites.length).toEqual(1);
      expect(wrapper.state().favorites[0]).toEqual(mockData.cleaned.planet[0]);
    })
  })
})
