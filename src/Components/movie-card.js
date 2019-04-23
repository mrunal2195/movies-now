import React, { Component } from 'react';
import '../styles/home.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { likeMovie, unlikeMovie } from '../reducers/actions';

class MovieCard extends Component {


  goToMovieDetails = () => {
    this.props.history.push(`/moviedetails/movie/${this.props.movie.imdbid}`)
    // if (this.props.user) {
    //   this.props.history.push(`/moviedetails/movie/${this.props.movie.imdbid}`)
    // } else {
    //   alert("Please Login to access your liked Movies");
    //   this.props.history.push('/login')
    // }
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

  unlikeMovie = () => {
    this.props.unlikeMovie(this.props.movie.imdbid, this.props.user.id);
  }

  goToUserProfile = () => {
    this.props.history.push(`/profile/${this.props.movie.user.id}`)
  }

  render() {
    console.log(this.props.movie.user);
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
          <div className="card-footer d-flex flex-row justify-content-between">
            {(this.props.movie.user) &&
              <h6 className="user-name" onClick={this.goToUserProfile}>
                {this.props.movie.user.firstname}
              </h6>
            }
        {(!isLiked) ?(
          <React.Fragment>
                 <i className="fas fa-thumbs-up float-right like-movie" onClick={this.likeMovie}></i>
          </React.Fragment>
        ):(
          <React.Fragment>
                 <i className="fas fa-thumbs-down float-right like-movie" onClick={this.unlikeMovie}></i>
          </React.Fragment>
        )
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  usermovies: state.usermovies
})

const mapDispatchToProps = dispatch => ({
  likeMovie: (userId, movie) => dispatch(likeMovie(userId, movie)),
  unlikeMovie: (movieid, userid) => dispatch(unlikeMovie(movieid, userid))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieCard))
