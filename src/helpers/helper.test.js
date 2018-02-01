import swapiData from './helper.js';
import mockData from '../mock-data.js';

let mockDataType;

window.fetch = jest.fn().mockImplementation( (url) => {
  return Promise.resolve({
    ok: true,
    status: 200,
    //mockDataType here will be the path to accessing the proper data
    //from mock object eg 'mockData.people.homeworld'
    json: () => Promise.resolve(mockDataType)
  })
})

swapiData.apiGet = jest.fn().mockImplementation( (url) => {
  return window.fetch(url);
})

describe('swapiData', () => {
  afterEach(() => {
    swapiData.apiGet.mockClear()
  })

  describe('apiGet', () => {
    it('fetchs if status is at or below 200', () => {
      expect(window.fetch).not.toHaveBeenCalled()
      swapiData.apiGet('people')
      expect(window.fetch).toHaveBeenCalled()
    })

    it('returns an error if status is above 200', async () => {
      window.fetch = jest.fn().mockImplementation( (url) => {
        return Promise.reject({
          status: () => throw new Error('Error')
        })
      })
      await swapiData.apiGet('people')
      await expect(window.fetch).toThrowError()
      window.fetch.mockClear()
    })
  })

  describe('cleanMovieData', () => {
    let mockMovie = mockData.films.results[0]
    it('returns an object containing scroll, title, and date', () => {
      expect(swapiData.cleanMovieData(mockMovie).scroll).toBeDefined();
      expect(swapiData.cleanMovieData(mockMovie).title).toEqual("A New Hope");
      expect(swapiData.cleanMovieData(mockMovie).date).toEqual("1977-05-25");
      expect(swapiData.cleanMovieData(mockMovie).director).not.toBeDefined();
    })

    it('returns an object with all string values', () => {
      expect(typeof swapiData.cleanMovieData(mockMovie).scroll).toEqual('string');
      expect(typeof swapiData.cleanMovieData(mockMovie).title).toEqual('string');
      expect(typeof swapiData.cleanMovieData(mockMovie).date).toEqual('string');
    })

    it('has scroll value that is all uppercase', () => {
      expect(swapiData.cleanMovieData(mockMovie).scroll)
      .toEqual(swapiData.cleanMovieData(mockMovie).scroll.toUpperCase())
    })
  })

  describe('fetchMovie', () => {
    it('calls apiGet with url ending in number fetchMovie is passed', async () => {
      mockDataType = mockData.films.results[0];

      expect(swapiData.apiGet).not.toHaveBeenCalled();
      await swapiData.fetchMovie(7);
      expect(swapiData.apiGet).toHaveBeenCalled();
    })

    it('calls cleanMovieData with results', () => {
      
    })
  })

  describe('cleanPeopleData', () => {
    it('returns an object containing name, homeworld, homeworldPop, and species', () => {

    })

    it('returns an object with all string values', () => {

    })
  })

  describe('fetchPeople', () => {
    it('calls apiGet with url', () => {

    })
    
    it('calls fetchPeopleDetails with apiGet\'s return value .homeworld', () => {

    })

    it('calls Promise.all with results of fetchPeopleDetails', () => {

    })

    it('calls cleanPeopleData with results of Promise.all', () => {

    })

    it('returns clean people data', () => {

    })
  })

  describe('fetchPeopleDetails', () => {
    it('calls apiGet with the homeworld and species each item in the array it is passed', () => {

    })
    
    it('returns an array of objects containing person, homeworld, and species data', () => {

    })
  })

  describe('fetchPlanets', () => {
    it('calls apiGet with url for planets', () => {

    })
  })
})