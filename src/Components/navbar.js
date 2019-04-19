import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/actions';

class Navbar extends Component {

    logout = () => {
        this.props.logout(this.props.user);
    }

    render() {
        const user = this.props.user;
        console.log(user);
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
                            <div className="navbar-nav ml-auto">
                            {(user && user.id && user.role === 'MODERATOR') && (
                                <Link className="nav-item nav-link" to="/reports"> Reports </Link>
                            )}
                            {(user && user.id) ? (
                                    <React.Fragment>
                                        <Link className="nav-item nav-link" to="/favouritemovies"> Your favourites :) </Link>
                                        <Link className="nav-item nav-link" to="/profile"> Hi {user.firstname} !! </Link>
                                        <Link className="nav-item nav-link" onClick={this.logout} to="/home"> Log out </Link>
                                    </React.Fragment>
                                ) : (
                                        <React.Fragment>
                                            <Link className="nav-item nav-link" to="/login"> Log In </Link>
                                            <Link className="nav-item nav-link" to="/register"> Sign Up </Link>
                                        </React.Fragment>
                                    )}
                            </div>
                        </div>
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
