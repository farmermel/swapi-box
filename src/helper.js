 const cleanMovieData = (json, num) => {
  return {
    scroll: json.films.results[0].opening_crawl,
    title: json.films.results[0].title,
    date: json.films.results[0].release_date
  };
}

const cleanCardData = (json) => {
  return json.map( item => {
    return item = {
      name: item.name,
      homeworld: item.homeworld,
      species: 'homeworld apicall'
    }
  })
} 


export default {
  cleanMovieData,
  cleanCardData
}