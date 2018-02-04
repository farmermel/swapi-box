import mockData from '../../mock-data.js'

const fetchMovie = jest.fn().mockImplementation( () => {
  return mockData.cleaned.film;
});

const fetchPeople = jest.fn().mockImplementation( () => {
  return mockData.cleaned.people;
});

const fetchVehicles = jest.fn().mockImplementation( () => {
  return mockData.cleaned.vehicle;
})

const fetchPlanets = jest.fn().mockImplementation( () => {
  return mockData.cleaned.planet;
})

export default {
  fetchPeople,
  fetchMovie,
  fetchVehicles,
  fetchPlanets
}