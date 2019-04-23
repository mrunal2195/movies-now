import React, { Component } from 'react';
import MovieCard from '../Components/movie-card';
import '../styles/home.css';

export default class MovieGrid extends Component {

  renderMovies = () => {
    let movies = this.props.movies || [];
    let filteredMovies = [];
    const movieIds = new Set();
    movies.forEach(movie => {
      if(movieIds.has(movie.imdbid))
        return
      filteredMovies.push(movie);
      movieIds.add(movie.imdbid)
    });
    return filteredMovies.map(movie =>
      <MovieCard key={movie.imdbid} movie={movie} />)
  }


  render() {
    return (
      <div className="d-flex flex-wrap justify-content-between mt-3">
        {this.renderMovies()}
      </div>
    )
  }
}
