import React, { Component } from 'react';
import '../styles/home.css';

export default class MovieCard extends Component {

  render() {
    return (
      <div className="card wbdv-movie-card">
        <img className="card-img-top" src={this.props.movie.Poster} alt=""/>
        <div className="card-body">
            {this.props.movie.Title}
        </div>
      </div>
    )
  }
}
