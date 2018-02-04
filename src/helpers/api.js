const apiGet = async (url) => {
  try {
    const initialFetch = await fetch(url)
    return await initialFetch.json()
  } catch (error) {
    throw new Error(`Error retrieving Star Wars facts: ${error}`)
  }
}

export default apiGet;