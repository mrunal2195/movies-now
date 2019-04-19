const axios = require('axios');

const endpoint = axios.create({
  baseURL: 'http://localhost:8080',
});

const lowerCaseKeys = obj =>
  Object
    .entries(obj)
    .reduce((obj, [key, val]) => ({
      ...obj,
      [key.toLowerCase()]: val
    }), {})



const registerUser = user => endpoint.post('/api/register', user)
  .then(response => response.data)
  .then(user => {
    if (!user)
      throw new Error("Username Already Exists, try some other username");
    return user;
  })
  .catch(error =>alert(error.message));

const loginUser = user => endpoint.post('/api/login', user)
  .then(response => response.data)
  .then(user => {
    if (!user)
      throw new Error("Invalid Username or Password");
    return user;
  })
  .catch(err => alert(err.message));

const updateUser = user => endpoint.put('/api/update', user)
  .then(response => response.data)
  .catch(err => console.log(err));

const likeMovie = (userId, movie) => endpoint.post(`/api/users/${userId}/movie`, movie)
  .then(response => response.data).then(movie => lowerCaseKeys(movie))
  .then(movie =>{
    if(!movie)
      throw new Error("Movie is already in Favourite's List");
    return movie
  })
  .catch(err => alert(err.message));

const getUsermovies = (userId) => endpoint.get(`/api/users/${userId}/movie`)
  .then(response => response.data).then(movies => movies.map(m => lowerCaseKeys(m)))
  .catch(err => console.log(err));

const followUser = (userId, followeeId) => endpoint.post(`/api/users/${userId}/follow/${followeeId}`)
  .then(response => response.data)
  .catch(err => console.log(err));

const unfollowUser = (userId, followeeId) => endpoint.delete(`/api/users/${userId}/unfollow/${followeeId}`)
  .then(response => response.data)
  .catch(err => console.log(err));

const getFollowedUsers = (userId) => endpoint.get(`/api/users/${userId}/follow`)
  .then(response => response.data)
  .catch(err => console.log(err));


const getMoviesOfFollowers = (userId) => endpoint.get(`/api/users/${userId}/followermovies`)
  .then(response => response.data)
  .catch(err => console.log(err))



export default {
  registerUser,
  loginUser,
  updateUser,
  likeMovie,
  getUsermovies,
  followUser,
  unfollowUser,
  getFollowedUsers,
  getMoviesOfFollowers
}