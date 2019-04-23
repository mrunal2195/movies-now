import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoviedetails } from '../reducers/actions';
import '../styles/moviedetail.css';
import { imdbIcon } from '../constants';
import Comment from './comments';


class MovieDetails extends Component {

  constructor(props) {
    super(props);
    this.props.getMoviedetails(this.props.match.params.imdbid)
  }

  renderActors = () => {
    const actors = this.props.movie.actors.split(',') || [];
    const renderActors = actors.map(actor => <li className="list-group-item borderless" key={actor}> {actor} </li>)
    return renderActors;
  }

  render() {
    let rottenTomatoes, critic, imdbRatings;
    if (this.props.movie) {
      const ratings = this.props.movie.ratings || {};
      if(ratings[1])
        rottenTomatoes = ratings[1].Value || 0;
      if(ratings[2])
        critic = ratings[0].Value || 0;
    }
    return (
      <div>
        {this.props.movie &&
          <div className="container movie-detail">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <img className="card-img-top movie-poster" src={this.props.movie.poster} alt="Image is not available" />
              </div>
              <div className="col-lg-6 col-md-8 col-sm-12">
                <div className="movie-title">
                  <h3>{this.props.movie.title}</h3>
                </div>
                <div className="movie-year">
                  <h5>{this.props.movie.year}</h5>
                </div>
                <div className="movie-genre">
                  <h5>{this.props.movie.genre}</h5>
                </div>
                <div className="imdb-ratings">
                  <img className="imdb-icon rating-margin" src={imdbIcon} alt=""></img>
                  <h6 className="imdb-rate">{this.props.movie.imdbrating}</h6>
                </div>
                <div className="rotten-tomatoes">
                  <h6 className="rating-margin">Rotten tomatoes &nbsp;{rottenTomatoes}</h6>
                </div>
                <div className="critic-ratings">
                  <h6 className="rating-margin">Critics &nbsp;{critic}</h6>
                </div>
                <div className="movie-release">
                  <h6>Movie Released: &nbsp;{this.props.movie.released}</h6>
                </div>
                <div className="movie-director">
                  <h6>Director: &nbsp;{this.props.movie.director}</h6>
                </div>
                <div className="movie-runtime">
                  <h6>RunTime: &nbsp;{this.props.movie.runtime}</h6>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
              </div>
            </div>
            <div className="row actors-plot">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <ul className="list-group actors-group">
                  <li className="list-group-item active"><h4>Actors</h4></li>
                  {this.renderActors()}
                </ul>
              </div>
              <div className="col-lg-6 col-md-8 col-sm-12">
                <h3>Plot</h3>
                <p>{this.props.movie.plot}</p>
                <Comment imdbid={this.props.match.params.imdbid} />
              </div>
              <div className="col-lg-3 col-sm-12" />
            </div>
          </div>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.currentMovie
})

const mapDispatcherToProps = dispatch => ({
  getMoviedetails: (imdbid) => dispatch(getMoviedetails(imdbid))
})

export default connect(mapStateToProps, mapDispatcherToProps)(MovieDetails)
