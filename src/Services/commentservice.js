const axios = require('axios');

const endpoint = axios.create({
  baseURL: 'http://localhost:8080',
});

const addComment = (userid, comment) => endpoint.post(`/api/user/${userid}/comment`, comment)
    .then(response => response.data)
    .catch(err => console.log(err));

const getComments = (imdbid) => endpoint.get(`/api/movie/${imdbid}/comment`)
    .then(response => response.data)
    .catch(err => console.log(err));

const flagComment = (commentid, comment) => endpoint.put(`/api/comment/${commentid}`, comment)
    .then(response => response.data)
    .catch(err => console.log(err));




export default {
    addComment,
    getComments,
    flagComment
}