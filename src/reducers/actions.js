import MovieService from '../Services/movieservice';
import Userservice from '../Services/userservice';
import CommentService from '../Services/commentservice';
import commentservice from '../Services/commentservice';

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

export const getMoviedetails = imdbID => dispatch => {
    MovieService.getMovieDetails(imdbID).then(movie => {
        dispatch({
            type : 'MOVIE_DETAILS',
            payload: movie
        })
    })
}

export const getUsermovies = userId => dispatch => {
    Userservice.getUsermovies(userId).then(movies => {
        dispatch({
            type: 'USER_MOVIES',
            payload: movies
        })
    })
}

export const addComment = (userid, comment) => dispatch => {
    commentservice.addComment(userid, comment).then(comment =>{
        dispatch({
            type:"ADD_COMMENT",
            payload: comment
        })
    })
}

export const getComments = (imdbid) => dispatch => {
    commentservice.getComments(imdbid).then(comments => {
        dispatch({
           type: "LOAD_COMMENTS",
           payload: comments
        })
    })
}

export const flagComment = (commentid, comment) => dispatch => {
    commentservice.flagComment(commentid, comment).then(comment => {
        dispatch({
            type: 'FLAG_COMMENT',
            payload: comment
        })
    })
}