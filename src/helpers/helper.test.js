import swapiData from './helper.js';
import mockData from '../mock-data.js';

let mockDataType;

window.fetch = jest.fn().mockImplementation( (url) => {
  return Promise.resolve({
    status: 200,
    json: () => Promise.resolve(mockDataType)
  })
})

const mockApiGet = jest.fn().mockImplementation( (url) => {
  return window.fetch;
})

describe('swapiData', () => {
  afterEach(() => {
    window.fetch.mockClear()
  })

  describe('cleanMovieData', () => {
    let mockMovie = mockData.films.results[0]
    it('returns an object containing scroll, title, and formatted date', () => {
      expect(swapiData.cleanMovieData(mockMovie).scroll).toBeDefined();
      expect(swapiData.cleanMovieData(mockMovie).title).toEqual("A New Hope");
      expect(swapiData.cleanMovieData(mockMovie).date).toEqual("May 25, 1977");
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
    it('calls fetch with url ending in number fetchMovie is passed', async () => {
      mockDataType = mockData.films.results[0];

      expect(window.fetch).not.toHaveBeenCalled();
      await swapiData.fetchMovie();
      expect(window.fetch).toHaveBeenCalled();
    })
  })

  describe('cleanPeopleData', () => {
    it('returns an object containing name, homeworld, homeworldPop, and species', () => {
      let cleanData = {"favorite": false,
        "id": 1517623585413,
        "info": {
          "homeworld": undefined,
          "homeworldPop": undefined,
          "name": "Luke Skywalker",
          "species": undefined
        },
        "type": "peopleData"}

      expect(swapiData.cleanPeopleData(mockData.people.results)[0].favorite).toEqual(cleanData.favorite);
      expect(swapiData.cleanPeopleData(mockData.people.results)[0].info).toEqual(cleanData.info);
      expect(swapiData.cleanPeopleData(mockData.people.results)[0].type).toEqual('peopleData');
      expect(typeof swapiData.cleanPeopleData(mockData.people.results)[0].id).toEqual('number');
    })
  })

  describe('fetchPeople', () => {
    it('calls apiGet with url', async () => {
      mockDataType = mockData.people;
      expect(window.fetch).not.toHaveBeenCalled();

      await swapiData.fetchPeople();

      expect(window.fetch).toHaveBeenCalled();
    })

    it('returns clean people data', async () => {
      mockDataType = mockData.people;
      const expectedInfo = {"homeworld": undefined, "homeworldPop": undefined, "name": "Luke Skywalker", "species": undefined};

      expect((await swapiData.fetchPeople())[0].favorite).toEqual(false);
      expect((await swapiData.fetchPeople())[0].info).toEqual(expectedInfo);
      expect((await swapiData.fetchPeople())[0].type).toEqual("peopleData");
      expect(typeof(await swapiData.fetchPeople())[0].id).toEqual("number");
    })
  })

  describe('fetchPeopleDetails', () => {
    it('calls fetch with the homeworld endpoint for each item in the array it is passed', () => {
      mockDataType = mockData.people.results;

      swapiData.fetchPeopleDetails(mockDataType);
      expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/planets/1/')
    })
  })

  describe('fetchPlanets', () => {
    it('calls fetch with planet endpoint', () => {
      mockDataType = mockData.planets;

      swapiData.fetchPlanets(mockDataType);
      expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/planets/");
    })
  })

  describe('fetchPlanetResidents', () => {
    it('calls fetch with person endpoint', () => {
      mockDataType = mockData.planets.results;
      const expected = [["https://swapi.co/api/people/5/"], ["https://swapi.co/api/people/68/"], ["https://swapi.co/api/people/81/"]];

      swapiData.fetchPlanetResidents(mockDataType);
      expect(window.fetch.mock.calls).toEqual(expected);
    })
  })

  describe('cleanPlanetData', () => {
    it('returns an object with an info object, favorite, id, and type', () => {
      mockDataType = mockData.planets.results;
      const expectedInfo = {"climate": "temperate", "name": "Alderaan", "population": "2000000000", "residents": ", , ", "terrain": "grasslands, mountains"};

      expect(swapiData.cleanPlanetData(mockDataType)[0].info).toEqual(expectedInfo);
      expect(swapiData.cleanPlanetData(mockDataType)[0].favorite).toEqual(false);
      expect(swapiData.cleanPlanetData(mockDataType)[0].type).toEqual('planetData');
      expect(typeof swapiData.cleanPlanetData(mockDataType)[0].id).toEqual('number');
    })
  })

  describe('cleanVehicleData', () => {
    it('returns an object with an info object, favorite, id, and type', () => {
      mockDataType = mockData.vehicles.results;
      const expected = {"class": "wheeled", "model": "Digger Crawler", "name": "Sand Crawler", "passengers": "30"};

      expect(swapiData.cleanVehicleData(mockDataType)[0].info).toEqual(expected);
      expect(swapiData.cleanVehicleData(mockDataType)[0].favorite).toEqual(false);
      expect(swapiData.cleanVehicleData(mockDataType)[0].type).toEqual('vehicleData');
      expect(typeof swapiData.cleanVehicleData(mockDataType)[0].id).toEqual('number');
    })
  })

  describe('fetchVehicles', () => {
    it('calls fetch with vehicles endpoint', () => {
      mockDataType = mockData.vehicles;

      swapiData.fetchVehicles(mockDataType);
      expect(window.fetch).toHaveBeenCalledWith("https://swapi.co/api/vehicles/")
    })
  })
})