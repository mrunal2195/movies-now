import React, { Component } from 'react';
import '../styles/home.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { likeMovie } from '../reducers/actions';

class MovieCard extends Component {


  goToMovieDetails = () => {
    if (this.props.user) {
      this.props.history.push(`/moviedetails/movie/${this.props.movie.imdbid}`)
    } else {
      alert("Please Login to access your liked Movies");
      this.props.history.push('/login')
    }
  }

  likeMovie = () => {
    const movie = {
      imdbid: this.props.movie.imdbid,
      title: this.props.movie.title,
      poster: this.props.movie.poster
    }
    if (this.props.user) {
    this.props.likeMovie(this.props.user.id, movie)
    } else {
      alert("Please Login to access your liked Movies");
    }
  }

  render() {
    let isLiked = null
    if(this.props.usermovies){
      isLiked = this.props.usermovies.filter(m => m.imdbid === this.props.movie.imdbid)[0];
      console.log("isliked", isLiked);
    }
    return (
      <div className="card m-4 movie-card">
        <div className="movie-image">
          <img className="card-img-top" src={this.props.movie.poster} alt="" onClick={this.goToMovieDetails} />
        </div>
        <div className="card-body">
          <h6 onClick={this.goToMovieDetails}> {this.props.movie.title}</h6></div>
        {(!isLiked) &&
        <div className="card-footer">
          <i className="fas fa-thumbs-up float-right like-movie" onClick={this.likeMovie}></i>
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  usermovies: state.usermovies
})

const mapDispatchToProps = dispatch => ({
  likeMovie: (userId, movie) => dispatch(likeMovie(userId, movie))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieCard))
