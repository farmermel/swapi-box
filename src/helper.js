 const cleanMovieData = (json, num) => {
  const movieScroll = {};

  movieScroll.scroll = json.films.results[0].opening_crawl;
  movieScroll.title = json.films.results[0].title;
  movieScroll.date = json.films.results[0].release_date;
  return movieScroll;
}


export default {
  cleanMovieData
}