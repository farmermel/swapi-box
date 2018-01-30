const root = 'https://swapi.co/api';

const apiGet = (url) => {
  return fetch(url).then( response => response.json() );
}

//export default functions that make api calls
export default {
  getMovie(number) {
    console.log(`here's movie ${number}`)
  },
  getData(type) {
    return apiGet(`${root}/people/`)

  }
}