import React, { Component } from 'react';
import '../styles/home.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieCard extends Component {


  goToMovieDetails = () => {
    if(this.props.user){
      this.props.history.push(`/moviedetails/movie/${this.props.movie.imdbID}`)
    }else{
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <div className="card wbdv-movie-card" onClick={this.goToMovieDetails}>
        <img className="card-img-top" src={this.props.movie.Poster} alt="" />
        <div className="card-body">
          {this.props.movie.Title}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps)(MovieCard))
