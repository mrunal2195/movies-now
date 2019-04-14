import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import MovieGrid from '../Containers/movie-grid'
import { connect } from 'react-redux';
import { searchMovies } from '../reducers/actions';

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            word: this.props.match.params.searchWord
        }
    }
    
    componentWillMount = () => {
        this.props.searchMovies(this.props.match.params.searchWord, 20);
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
                    <div className="row">
                        search results for {this.state.word} ....
                    </div>
                    <div className="row movie-searchbar">
                        <MovieGrid movies={this.props.searchResults}></MovieGrid>
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    searchResults: state.searchResults
});

const mapDispatchToProps = dispatch => ({
    searchMovies: (keyword, count) => dispatch(searchMovies(keyword, count))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
