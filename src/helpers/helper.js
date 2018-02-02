const root = 'https://swapi.co/api';

// const apiGet = async (url) => {
//   try {
//     const initialFetch = await fetch(url)
//     return await initialFetch.json()
//   } catch (e) {
//     throw e

//     // throw new Error('Error retrieving Star Wars facts')
//   }

//   // if(initialFetch.status <= 200) {
//   // } else {
//   // }
// }

import apiGet from './api.js';

const cleanMovieData = (movie) => {
  return {
    scroll: movie.opening_crawl.toUpperCase(),
    title: movie.title,
    date: movie.release_date
  };
}

const randomizeFilmScroll = () => {
  const lastMovieNum = 7;
  return Math.ceil(Math.random() * lastMovieNum);
}

const fetchMovie = async () => {
  const num = randomizeFilmScroll();
  const results = await apiGet(`${root}/films/${num}/`)
  return cleanMovieData(results)
}

const cleanPeopleData = (people) => {
  return people.map( person => {
    return person = {
      name: person.name,
      homeworld: person.homeworld.name,
      homeworldPop: person.homeworld.population,
      species: person.species.name
    }
  })
}

const fetchPeople = async () => {
  const { results } = await apiGet(`${root}/people/`)
  const getPeople = await fetchPeopleDetails(results)
  const people = await Promise.all(getPeople)
  return cleanPeopleData(people)
}

const fetchPeopleDetails = (peopleArray) => {
  return peopleArray.map( async (person) => {
    let homeworld = await apiGet(person.homeworld)
    let species = await apiGet(person.species)
    return {...person, homeworld, species}
  })
}

const cleanPlanetData = (planets) => {
  return planets.map( planet => {
    return planet = {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: planet.residents
    }
  })
}

const fetchPlanets = async () => {
  const { results } = await apiGet(`${root}/planets/`)
  const getResidents = await fetchPlanetResidents(results)
  const planets = await Promise.all(getResidents)
  return cleanPlanetData(planets)
}

const fetchPlanetResidents = (planetArray) => {
  return planetArray.map( async (planet) => {
    let peoplePromises = await planet.residents.map( async person => {
      const resident = await apiGet(person)
      return resident
    })
    const residents = await Promise.all(peoplePromises)
    return {...planet, residents}
  })
}

const cleanVehicleData = (vehicles) => {
  return vehicles.map( vehicle => {
    return vehicle = {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers
    }
  })
}

const fetchVehicles = async () => {
  const { results } = await apiGet(`${root}/vehicles/`)
  return cleanVehicleData(results);
} 

export default {
  apiGet,
  cleanMovieData,
  cleanPeopleData,
  fetchMovie,
  fetchPeople,
  fetchPlanets,
  fetchVehicles
}