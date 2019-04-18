import React, { Component } from 'react';
import '../styles/home.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Userservice  from '../Services/userservice';

class MovieCard extends Component {


  goToMovieDetails = () => {
    if(this.props.user){
      this.props.history.push(`/moviedetails/movie/${this.props.movie.imdbid}`)
    }else{
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
    if(this.props.user){
      Userservice.likeMovie(this.props.user.id, movie).then(movie => movie).then(alert("liked movie"));
    }else{
      alert("Please Login to access your liked Movies");
    }
  }

  render() {
    return (
      <div className="card wbdv-movie-card">
        <img className="card-img-top" src={this.props.movie.poster} alt="" onClick={this.goToMovieDetails}/>
        <div className="card-body">
          <div className="row">
            <div className="col-8" onClick={this.goToMovieDetails}>
            {this.props.movie.title}
            </div>
            <div className="col-4">
              <i className="fas fa-thumbs-up float-right" onClick={this.likeMovie}></i>
            </div>
          </div>
         
         
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps)(MovieCard))
