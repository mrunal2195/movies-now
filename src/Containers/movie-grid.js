import React, { Component } from 'react';
import MovieCard from '../Components/movie-card';
import '../styles/home.css';
import { connect } from 'react-redux';

export default class MovieGrid extends Component {

  constructor(props){
    super(props);
  }

  renderMovies = () => {
    let movies = this.props.movies || [];
    return movies.map(movie =>
        <MovieCard key={movie.imdbId} movie={movie}/>)
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
