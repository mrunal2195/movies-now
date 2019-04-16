import MovieService from '../Services/movieservice';
import Userservice from '../Services/userservice';

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

export const registerUser = user => dispatch => {
    Userservice.registerUser(user).then(user => {
        dispatch({
            type: 'CURRENT_USER',
            payload: user
        })
    }).catch(err => dispatch({
        type: 'REGISTER_FAILURE',
        payload: true
    }))
}

export const loginUser = user => dispatch => {
    Userservice.loginUser(user).then(user => {
        dispatch({
            type: 'CURRENT_USER',
            payload: user
        })
    }).catch(err => dispatch({
        type: 'LOGIN_FAILURE',
        payload: true
    }))
}

export const updateUser = user => dispatch => {
    Userservice.updateUser(user).then(user => {
        dispatch({
            type:'CURRENT_USER',
            payload:user
        })
    })
}

export const logout = user => ({
    type : 'LOGOUT',
    payload : user
})