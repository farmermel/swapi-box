import apiGet from './api.js';
const root = 'https://swapi.co/api';

const months = {
  '01': 'January',
  '02': 'Febuary',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
}

const cleanMovieData = (movie) => {
  const YYYYMMDD = movie.release_date.split('-');
  const date = `${months[YYYYMMDD[1]]} ${YYYYMMDD[2]}, ${YYYYMMDD[0]}`
  return {
    scroll: movie.opening_crawl.toUpperCase(),
    title: movie.title,
    date: date
  };
}

const randomizeFilmScroll = () => {
  const lastMovieNum = 7;
  return Math.ceil(Math.random() * lastMovieNum);
}

const fetchMovie = async () => {
  const num = randomizeFilmScroll();
  const results = await apiGet(`${root}/films/${num}/`);
  return cleanMovieData(results);
}

const cleanPeopleData = (people) => {
  return people.map( (person, index) => {
    return {
      info: {
        name: person.name,
        homeworld: person.homeworld.name,
        homeworldPop: person.homeworld.population,
        species: person.species.name
      },
      favorite: false,
      id: Date.now() + index,
      type: 'peopleData'
    }
  });
}

const fetchPeople = async () => {
  const { results } = await apiGet(`${root}/people/`);
  const getPeople = await fetchPeopleDetails(results);
  const people = await Promise.all(getPeople);
  return cleanPeopleData(people);
}

const fetchPeopleDetails = (peopleArray) => {
  return peopleArray.map( async (person) => {
    let homeworld = await apiGet(person.homeworld);
    let species = await apiGet(person.species);
    return {...person, homeworld, species};
  })
}

const makeList = (residentsArr) => {
  return residentsArr.map( resident => resident.name).join(', ')
}

const cleanPlanetData = (planets) => {
  return planets.map( (planet, index) => {
    const residents = planet.residents.length
      ? makeList(planet.residents)
      : 'no residents'
    return {
      info: {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: residents
      },
      favorite: false,
      id: Date.now() + index,
      type: 'planetData'
    }
  });
}

const fetchPlanets = async () => {
  const { results } = await apiGet(`${root}/planets/`);
  const getResidents = await fetchPlanetResidents(results);
  const planets = await Promise.all(getResidents);
  return cleanPlanetData(planets);
}

const fetchPlanetResidents = (planetArray) => {
  return planetArray.map( async (planet) => {
    let peoplePromises = await planet.residents.map( async person => {
      const resident = await apiGet(person);
      return resident;
    })
    const residents = await Promise.all(peoplePromises);
    return {...planet, residents};
  })
}

const cleanVehicleData = (vehicles) => {
  return vehicles.map( (vehicle, index) => {
    return {
      info: {
        name: vehicle.name,
        model: vehicle.model,
        class: vehicle.vehicle_class,
        passengers: vehicle.passengers
      },
      favorite: false,
      id: Date.now() + index,
      type: 'vehicleData'
    }
  });
}

const fetchVehicles = async () => {
  const { results } = await apiGet(`${root}/vehicles/`);
  return cleanVehicleData(results);
}

export default {
  apiGet,
  cleanMovieData,
  cleanPeopleData,
  cleanPlanetData,
  cleanVehicleData,
  fetchMovie,
  fetchPeople,
  fetchPeopleDetails,
  fetchPlanets,
  fetchPlanetResidents,
  fetchVehicles,
}