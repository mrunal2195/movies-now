import OMDB from './omdbservice';


const lowerCaseKeys = obj =>
    Object
        .entries(obj)
        .reduce((obj, [key, val]) => ({
            ...obj,
            [key.toLowerCase()]: val
        }), {})


const movies = OMDB.search({
    s: 'life'
}, 12).then(movies => movies).then(movies => movies.map(m => lowerCaseKeys(m)));


const searchMovies = (keyword, count) => OMDB.search({
    s: keyword
}, count).then(movies => movies).then(movies => movies.map(m => lowerCaseKeys(m)));

const getMovieDetails = (id) => OMDB.getDetails(id)
    .then(movie => movie)
    .then(movie => lowerCaseKeys(movie));



export default {
    movies,
    searchMovies,
    getMovieDetails
}