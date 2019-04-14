import React, { Component } from 'react';
import '../styles/home.css';

export default class MovieCard extends Component {


  constructor(props){
    super(props);
  }


  render() {
    return (
      <div class="card wbdv-movie-card">
        <img class="card-img-top" src={this.props.movie.Poster} />
        <div class="card-body">
          <a href="#" class="card-link">{this.props.movie.Title}</a>
        </div>
      </div>
    )
  }
}
