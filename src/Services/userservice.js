const axios = require('axios');

const endpoint = axios.create({
  baseURL: 'http://localhost:8080',
});


const registerUser = user => endpoint.post('/api/register', user)
  .then(response => response.data)
  .catch(error => console.log(error));

const loginUser = user => endpoint.post('/api/login', user)
  .then(response => response.data)
  .catch(err => console.log(err));

const updateUser = user => endpoint.put('/api/update', user)
  .then(response => response.data)
  .catch(err => console.log(err));



export default {
    registerUser,
    loginUser,
    updateUser
}