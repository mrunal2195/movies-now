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
    const renderActors = actors.map(actor => <li className="borderless">{actor}</li>)
    return renderActors;
  }

  render() {
    let rottenTomatoes, critic;
    if (this.props.movie) {
      const ratings = this.props.movie.ratings;
      rottenTomatoes = ratings[1].Value;
      critic = ratings[0].Value;
    }
    return (
      <div>
        {this.props.movie &&
        <div className="container movie-detail">
          <div className="row">
            <div className="col-md-3 col-sm-12 justify-content-center">
              <div>
                <img className="card-img-top movie-poster" src={this.props.movie.poster} alt="" />
              </div>
              <div>

              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="row movie-title">
                <h3>{this.props.movie.title}</h3>
              </div>
              <div className="row movie-year">
                <h5>{this.props.movie.year}</h5>
              </div>
              <div className="row movie-genre">
                <h5>{this.props.movie.genre}</h5>
              </div>
              <div className="row"></div>
              <div className="row  imdb-ratings">
                <img className="imdb-icon rating-margin" src={imdbIcon} alt=""></img>
                <h6 className="imdb-rate">{this.props.movie.imdbrating}</h6>
              </div>
              <div className="row  rotten-tomatoes">
                <h6 className="rating-margin">Rotten tomatoes</h6><h6>{rottenTomatoes}</h6>
              </div>
              <div className="row  critic-ratings">
                <h6 className="rating-margin">Critics</h6><h6>{critic}</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <ul className="">
                <li class="borderless"><h4>Actors</h4></li>
                {this.renderActors()}
              </ul>
            </div>
            <div className="col-md-6 col-sm-12">
              <h3>Plot</h3><br></br>
              <p>{this.props.movie.plot}</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <Comment imdbid={this.props.movie.imdbid}/>
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
