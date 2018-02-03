import apiGet from './api.js';

window.fetch = jest.fn().mockImplementation( (url) => {
  return Promise.resolve({
    status: 200,
    json: () => Promise.resolve({})
  })
})

describe('apiGet', () => {
  it('fetchs if status is at or below 200', () => {
    expect(window.fetch).not.toHaveBeenCalled()
    apiGet('people')
    expect(window.fetch).toHaveBeenCalled()
  })

  it('returns an error if status is above 200', async () => {
    // window.fetch = jest.fn().mockImplementation( (url) => {
    //   return Promise.reject({
    //     status: () => throw new Error('Error')
    //   })
    // })
    // await swapiData.apiGet('people')
    // await expect(window.fetch).toEqual()
  })
})
