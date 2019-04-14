import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import MovieGrid from './movie-grid';
import MovieService from '../Services/movieservice';

export default class Home extends Component {



    getMovies = () => {
        MovieService.fetchMovies().then(movies => {
            console.log(movies);
        })
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark wbdv-nvbar">
                    <Link className="navbar-brand wbdv-movie-header" to="/home">Movies Now !!</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ml-auto justify-content-between">
                            <div class="navbar-nav ml-auto">
                                <Link className="nav-item nav-link" to="/register"> Register </Link>
                                <Link className="nav-item nav-link" to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row movie-searchbar">
                        <div className="col-12">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control"
                                    placeholder="search movie here ...." aria-label="Movie Title"
                                    aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-secondary add-new-course-btn"
                                        type="button" id="button-addon2">
                                        <Link to ="/search">search</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.getMovies()}
                    <MovieGrid></MovieGrid>
                </div>
                
            </div>
        )
    }
}
