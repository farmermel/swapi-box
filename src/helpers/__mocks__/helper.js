import mockData from '../../mock-data.js'

const mockSwapiData = jest.fn();

console.log('reaching this file?')

const __fetchMovie = jest.fn().mockImplementation( () => {
  return mockData.cleaned.film;
});

const __fetchPeople = jest.fn().mockImplementation( () => {
  return mockData.cleaned.people;
});

export {
  __fetchPeople,
  __fetchMovie
}

// const mock = jest.fn().mockImplementation(() => {
//   return { 
//     fetchMove: __fetchMovie,
//     fetchPeople: __fetchPeople
//    };
// });



// export default mock;