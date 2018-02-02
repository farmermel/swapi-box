const root = 'https://swapi.co/api';

const apiGet = async (url) => {
  try {
    const initialFetch = await fetch(url)
    return await initialFetch.json()
  } catch (e) {
    throw e

    // throw new Error('Error retrieving Star Wars facts')
  }

  // if(initialFetch.status <= 200) {
  // } else {
  // }
}

export default apiGet;