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

export default {
  fetchPeople,
  fetchMovie,
  fetchVehicles
}