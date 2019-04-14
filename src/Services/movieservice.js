import OMDB from './omdbservice';


const movies = OMDB.search({
    s: 'love'
}, 12).then(movies => movies);


const searchMovies = (keyword, count) => OMDB.search({
    s: keyword
}, count).then(movies => movies);

const getMovieDetails = (id) => OMDB.getDetails(id).then(movies => movies);



export default {
    movies,
    searchMovies,
    getMovieDetails
}