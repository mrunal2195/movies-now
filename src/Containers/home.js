import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import MovieGrid from './movie-grid';
import { connect } from 'react-redux';
import { loadMovies } from '../reducers/actions';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchWord : ""
        }
    }

    changeProp = prop => e => {
        this.setState({
            [prop] : e.target.value
        })
    }

    componentWillMount(){
        this.props.getMovies();
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark wbdv-nvbar">
                    <Link className="navbar-brand wbdv-movie-header" to="/home">Movies Now !!</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto justify-content-between">
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
                                    aria-describedby="button-addon2" onChange={this.changeProp('searchWord')} />
                                <div className="input-group-append">
                                <Link to={`/search/s=${this.state.searchWord}`}>
                                    <button className="btn btn-secondary add-new-course-btn"
                                        type="button" id="button-addon2">
                                       Search
                                    </button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MovieGrid movies={this.props.movies}></MovieGrid>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
       movies : state.movies
    })
};

const mapDispatchToProps = (dispatch) => ({
    
    getMovies: () => dispatch(loadMovies())
   
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
