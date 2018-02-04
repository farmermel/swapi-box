import mockData from '../mock-data.js';


window.fetch = jest.fn().mockImplementation( () => {
  return Promise.resolve({
    status: 200,
    json: () => Promise.resolve({})
  })
})

export const mockApiGet = jest.fn().mockImplementation( (url) => {
  return window.fetch;
})