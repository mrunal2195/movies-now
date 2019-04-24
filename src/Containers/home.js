import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import MovieGrid from './movie-grid';
import UserListAdmin from './user-list-admin';
import { connect } from 'react-redux';
import { loadMovies, getAllUsersForAdmin, getRecentlyLikedMovies } from '../reducers/actions';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchWord: ""
        }
    }

    changeProp = prop => e => {
        this.setState({
            [prop]: e.target.value
        })
    }

    componentWillMount() {
        this.props.getMovies();
        this.props.getRecentMovies();
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
                                    <Link to={`/search/${this.state.searchWord}`}>
                                        <button className="btn btn-secondary add-new-course-btn"
                                            type="button" id="button-addon2">
                                            Search
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mt-3">
                       <h3>Recently added movies.....</h3>
                    </div>
                    <MovieGrid movies={this.props.recentMovies}></MovieGrid>
                    {(this.props.user && this.props.user.role === 'ADMIN') && (<UserListAdmin allUsersForAdmin={this.props.allUsersForAdmin}></UserListAdmin>)}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
        recentMovies: state.recentlyLiked,
        movies: state.movies,
        allUsersForAdmin: state.nonAdminUsers
    })
};

const mapDispatchToProps = (dispatch) => ({
    getRecentMovies: () => dispatch(getRecentlyLikedMovies()),
    getMovies: () => dispatch(loadMovies()),
    getAllUsersForAdmin: () => dispatch(getAllUsersForAdmin())

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);