import MovieService from '../Services/movieservice';

export const loadMovies = () => dispatch => {
    MovieService.movies.then(movies => {
        dispatch({
            type: "LOAD_MOVIES",
            payload: movies
        })
    })
}

export const searchMovies = (keyword, count) => dispatch => {
   MovieService.searchMovies(keyword, count).then(movies => {
        dispatch({
            type: 'LOAD_SEARCHRESULTS',
            payload: movies
        })
    })
}