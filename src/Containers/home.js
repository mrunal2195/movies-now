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
