import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/actions';

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchWord : ""
        }
    }

    logout = () => {
        this.props.logout(this.props.user);
    }

    changeProp = prop => e => {
        this.setState({
            [prop] : e.target.value
        })
    }
    render() {
        const user = this.props.user;
        console.log(user);
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark wbdv-nvbar">
                    <Link className="navbar-brand wbdv-movie-header" to="/home">Movies Now !!</Link>
                    {(user && user.role === 'ADMIN') ? (<></>) :(
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
                    </div>)}
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
                            {(user && user.id && user.role !== 'ADMIN') && (
                                    <React.Fragment>
                                        <Link className="nav-item nav-link" to="/favouritemovies"> Your favourites :) </Link>
                                        <Link className="nav-item nav-link" to="/profile"> Hi {user.firstname} !! </Link>
                                        <Link className="nav-item nav-link" onClick={this.logout} to="/home"> Log out </Link>
                                    </React.Fragment>
                            )}

                            {(user && user.role === 'ADMIN') && 
                                    <React.Fragment>
                                        <Link className="nav-item nav-link" onClick={this.logout} to="/home"> Log out </Link>
                                    </React.Fragment>}

                            {(!user) && (
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
