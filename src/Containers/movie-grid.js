import React, { Component } from 'react';
import MovieCard from '../Components/movie-card';
import '../styles/home.css';

export default class MovieGrid extends Component {

  renderMovies = () => {
    let movies = this.props.movies || [];
    return movies.map(movie =>
        <MovieCard key ={movie.imdbid}  movie={movie}/>)
    }
  
  
    render() {
    return (
      <div>
           <div className="card-deck wbdv-moviegrid">
                {this.renderMovies()}
            </div>
      </div>
    )
  }
}
