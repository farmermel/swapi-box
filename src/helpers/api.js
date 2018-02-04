const apiGet = async url => {
  try {
    const initialFetch = await fetch(url);
    if(initialFetch.status <= 200) {
      return await initialFetch.json();
    } else {
      throw new Error('Bad status code');
    }
  } catch (error) {
    throw new Error(`Error retrieving Star Wars facts: ${error}`);
  }
}

export default apiGet;