import React, { Component } from 'react';
import '../styles/home.css';

export default class MovieCard extends Component {

  render() {
    return (
      <div class="card wbdv-movie-card">
        <img class="card-img-top" src={this.props.movie.Poster} alt=""/>
        <div class="card-body">
            {this.props.movie.Title}
        </div>
      </div>
    )
  }
}
