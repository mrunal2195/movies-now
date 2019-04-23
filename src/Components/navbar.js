import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/actions';
import '../styles/home.css';

class Navbar extends Component {

    logout = () => {
        this.props.logout(this.props.user);
    }

    render() {
        const user = this.props.user;
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark wbdv-nvbar">
                    <Link className="navbar navbar-brand wbdv-movie-header flex-fill" to="/home">Movies Now !!</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse flex-fill dual-collapse2">
                        <ul className="navbar-nav ml-auto ">
                            {(user && user.id && user.role === 'MODERATOR') && (
                                <Link className="nav-item nav-link" to="/reports"> Reports </Link>
                            )}
                            {(user && user.id && user.role !== 'ADMIN') && (
                                <React.Fragment>
                                    <Link className="nav-item nav-link text-white" to="/favouritemovies"> Your favourites :) </Link>
                                    <Link className="nav-item nav-link text-white" to="/profile"> Hi {user.firstname} !! </Link>
                                    <Link className="nav-item nav-link text-white" onClick={this.logout} to="/home"> Log out </Link>
                                </React.Fragment>
                            )}

                            {(user && user.role === 'ADMIN') &&
                                <React.Fragment>
                                    <Link className="nav-item nav-link text-white" onClick={this.logout} to="/home"> Log out </Link>
                                </React.Fragment>}

                            {(!user) && (
                                <React.Fragment>
                                    <Link className="nav-item nav-link text-white" to="/login"> Log In </Link>
                                    <Link className="nav-item nav-link text-white" to="/register"> Sign Up </Link>
                                </React.Fragment>)}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    logout: user => dispatch(logout(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
