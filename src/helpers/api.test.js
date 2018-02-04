import apiGet from './api.js';

window.fetch = jest.fn().mockImplementation( (url) => {
  return Promise.resolve({
    status: 200,
    json: () => Promise.resolve({})
  })
})

describe('apiGet', () => {
  it('fetchs if status is at or below 200', () => {
    expect(window.fetch).not.toHaveBeenCalled();
    apiGet('people');
    expect(window.fetch).toHaveBeenCalled();
  })

  it('throws an error if response is above 200', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 500,   
        })
      )

     expect(apiGet('google.com')).rejects.toEqual(Error('Error retrieving Star Wars facts: Error: Bad status code'));
    })
})
