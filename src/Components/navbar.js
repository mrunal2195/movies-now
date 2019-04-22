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
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <Link className="navbar navbar-brand wbdv-movie-header" to="/home">Movies Now !!</Link>
                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav w-100 justify-content-center d-flex flex-fill w-100">
                            {(user && user.role === 'ADMIN') ? (<></>) :(
                                <div className="row movie-searchbar w-100">
                                    <div className="col-12">
                                        <div className="input-group">
                                            <input type="text" className="form-control"
                                                placeholder="search movie here ...." aria-label="Movie Title"
                                                aria-describedby="button-addon2" onChange={this.changeProp('searchWord')} />
                                            <div className="input-group-append">
                                            <Link to={`/search/${this.state.searchWord}`}>
                                                <button className="btn btn-secondary add-new-course-btn"
                                                    type="button" id="button-addon2">
                                                   <i className="fas fa-search"></i>
                                                </button>
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                            </div>)}
                        </ul>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>    
                    <div className="navbar-collapse collapse d-flex flex-fill dual-collapse2">
                        <ul className="navbar-nav ml-auto">
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
