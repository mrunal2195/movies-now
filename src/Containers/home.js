import React, { Component } from 'react';
import '../styles/home.css';
import MovieGrid from './movie-grid';
import UserListAdmin from './user-list-admin';
import { connect } from 'react-redux';
import { loadMovies,getAllUsersForAdmin,deleteUser } from '../reducers/actions';

class Home extends Component {
    componentWillMount(){
        this.props.getMovies();
        this.props.getAllUsersForAdmin();
    }


    render() {
        return (
            <div>
                <div className="container">
                    <MovieGrid movies={this.props.movies}></MovieGrid>
                    {(this.props.user && this.props.user.role === 'ADMIN') && 
                        (<UserListAdmin allUsersForAdmin={this.props.allUsersForAdmin}></UserListAdmin>)}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    movies : state.user && state.user.role === 'ADMIN' ? [] : state.movies,
    user: state.user,
    allUsersForAdmin: state.nonAdminUsers
})

const mapDispatchToProps = (dispatch) => ({
    getMovies: () => dispatch(loadMovies()),
    getAllUsersForAdmin: () => dispatch(getAllUsersForAdmin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
