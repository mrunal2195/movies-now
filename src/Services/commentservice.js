const axios = require('axios');

const endpoint = axios.create({
  baseURL: 'https://stark-sands-39906.herokuapp.com/',
  withCredentials: true
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

const getFlaggedComments = () => endpoint.get(`/api/comment/flagged`)
    .then(response => response.data)
    .catch(err => console.log(err));

const manageComment = (commentId, action) => endpoint.put(`/api/comment/${commentId}/${action}`)
    .then(response => response.data)
    .catch(err => console.log(err));




export default {
    addComment,
    getComments,
    flagComment,
    getFlaggedComments,
    manageComment
}