import React, { Component } from 'react';
import '../styles/home.css';

export default class MovieCard extends Component {



  render() {
    return (
      <div class="card wbdv-movie-card">
        <img class="card-img-top" src="https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg" alt="Card image cap" />
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    )
  }
}
