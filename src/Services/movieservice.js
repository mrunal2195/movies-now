const APIKey = "&apikey=4d8f55e6";
const omdb = "http://www.omdbapi.com/";
const getMovies = "http://www.omdbapi.com/?y=2019&s=life";



const fetchMovies= () => fetch(getMovies+APIKey).then(response => response.json());

const searchMovies = null



export default {
    fetchMovies,
    searchMovies
}