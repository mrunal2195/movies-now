const axios = require('axios');

const imdb = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apikey: '4d8f55e6'
  }
});

const searchByPage = (s, page) =>
  imdb.get('/', {
    params: {
      ...s,
      page
    }
  }).then(res => res.data)

const search = async (s, results) => {
  let page = 1
  let movies = [];
  while (movies.length < results) {
    const res = await searchByPage(s, page++);
    if (res.Response == 'False') {
      break;
    }
    const posterMovie = res.Search.filter(m => m.Poster !== 'N/A')
    movies = movies.concat(posterMovie);
  }
  return movies
}

export default {
  search
}