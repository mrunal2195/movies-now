import React, { Component } from 'react';
import MovieCard from '../Components/movie-card';
import '../styles/home.css';

export default class MovieGrid extends Component {
  
  

  renderMovies = () => {
    let movies = ["mrunal", "Mrunal", "mrunal", "mrunal", "mrunal", "mrunal"];
    return movies.map(movie =>
        <MovieCard/>)

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
