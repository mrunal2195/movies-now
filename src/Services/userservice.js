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
  .catch(error => console.log(error));

const loginUser = user => endpoint.post('/api/login', user)
  .then(response => response.data)
  .catch(err => console.log(err));

const updateUser = user => endpoint.put('/api/update', user)
  .then(response => response.data)
  .catch(err => console.log(err));

const likeMovie = (userId, movie) => endpoint.post(`/api/user/${userId}/movie`, movie)
  .then(response => response.data).then(movie => lowerCaseKeys(movie))
  .catch(err => console.log(err));

const getUsermovies = (userId) => endpoint.get(`/api/user/${userId}/movie`)
  .then(response => response.data).then(movies => movies.map(m => lowerCaseKeys(m)))
  .catch(err => console.log(err));



export default {
  registerUser,
  loginUser,
  updateUser,
  likeMovie,
  getUsermovies
}