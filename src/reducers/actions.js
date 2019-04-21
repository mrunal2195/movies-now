import MovieService from '../Services/movieservice';
import Userservice from '../Services/userservice';
import commentservice from '../Services/commentservice';
import userservice from '../Services/userservice';

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
        getUsermovies(user.id)(dispatch);
        getFollowedUsers(user.id)(dispatch);
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
        if(user.role !== "ADMIN"){
            getUsermovies(user.id)(dispatch);
            getFollowedUsers(user.id)(dispatch);
        }else{
            getAllUsersForAdmin()(dispatch);
        }
    }).catch(err => dispatch({
        type: 'LOGIN_FAILURE',
        payload: true
    }))
}


export const getUserProfile = () => dispatch => {
    Userservice.getProfile().then(user => {
        if(user !== ""){
            dispatch({
                type: 'CURRENT_USER',
                payload: user
            })
            getUsermovies(user.id)(dispatch);
            getFollowedUsers(user.id)(dispatch);
        }
    })
}

export const getAllUsersForAdmin = () => dispatch => {
    Userservice.getAllUsersForAdmin().then(users => {
        dispatch({
            type:'ALL_USERS_ADMIN',
            payload:users
        })
    })
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

export const getFlaggedComments = () => dispatch => {
    commentservice.getFlaggedComments().then(comments => {
        dispatch({
            type: "REPORTED_COMMENTS",
            payload: comments
        })
    })
}

export const unflagComment = (commentid) => dispatch => {
    commentservice.manageComment(commentid, 'UNFLAG').then(comment =>{
        dispatch({
            type: "UNREPORT_COMMENT",
            payload: comment
        })
    })

}

export const deleteComment = (commentid) => dispatch => {
    commentservice.manageComment(commentid, 'DELETE').then(comment => {
        dispatch({
            type:"UNREPORT_COMMENT",
            payload: comment
        })
    })
}

export const getFollowedUsers = (userid) => dispatch => {
    userservice.getFollowedUsers(userid).then(users => {
        dispatch({
            type: 'FOLLOWED_USERS',
            payload: users
        })
    })
}


export const followUser = (userId, followerId) => dispatch => {
    userservice.followUser(userId, followerId).then(user => {
        dispatch({
            type: "FOLLOW_USER",
            payload: user
        })
    })
}

export const unfollowUser = (userId, followerId) => dispatch => {
    userservice.unfollowUser(userId, followerId).then(user => {
        dispatch({
            type: 'UNFOLLOW_USER',
            payload: user
        })
    })
}

export const getMoviesOfFollowers = (userId) => dispatch => {
    userservice.getMoviesOfFollowers(userId).then(followerMovies =>{
        dispatch({
            type: 'FOLLOWER_MOVIES',
            payload: followerMovies
        })
    })
}

export const likeMovie = (userId, movie) => dispatch => {
    userservice.likeMovie(userId, movie).then(movie =>{
        dispatch({
            type: 'LIKE_MOVIE',
            payload: movie
        })
        alert("Movie Has been added to your favourites:)")
    })
}