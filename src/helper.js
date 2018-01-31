const root = 'https://swapi.co/api';

const apiGet = async (url) => {
  const initialFetch = await fetch(url)
  return await initialFetch.json()
}

const cleanMovieData = (movie) => {
  return {
    scroll: movie.opening_crawl.toUpperCase(),
    title: movie.title,
    date: movie.release_date
  };
}

const fetchMovie = async (num) => {
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

// async componentDidMount () {
//   const initialFetch = await fetch('http://localhost:3001/api/frontend-staff')
//   const { bio } = await initialFetch.json()
//   const staff = await this.fetchBios(bio)
//   this.setState({ staff })
// }

// fetchBios(arrayOfBios) {
//   const unresolvedPromises = arrayOfBios.map(async (staffMember) => {
//     let initialFetch = await fetch(staffMember.info)
//     let bio = await initialFetch.json()
//     return {...staffMember, ...bio}
//   })
//   return Promise.all(unresolvedPromises)
// }


export default {
  fetchMovie,
  fetchPeople
}