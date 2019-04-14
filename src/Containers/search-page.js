import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import MovieService from '../Services/movieservice';
import MovieGrid from './movie-grid';

export default class Search extends Component {



    // getMovies = () => {
    //     MovieService.fetchMovies().then(movies => {
    //         console.log(movies);
    //     })
    // }

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
                        Search results for .....
                    </div>
                </div>
                <div>
                </div> 
            </div>
        )
    }
}
