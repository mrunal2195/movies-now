import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../reducers/actions'
class Login extends Component {


    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }

    changeProp = prop => e => {
        this.setState({
            [prop] : e.target.value
        })
    }

    loginUser = e => {
        e.preventDefault();
        console.log("called from login");
        this.props.loginUser(this.state);
    }


    render() {
        return (
            <div>
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
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <form className="sign-in-form">
                        <h1>Log In Here....</h1>
                        <br />
                        <div className="form-group row">
                            <label for="username" className="col-sm-2 col-form-label">
                                Username
                        </label>
                            <div className="col-sm-6">
                                <input className="form-control" id="wbdv-username" placeholder="Alice" 
                                    onChange={this.changeProp('username')}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="password" className="col-sm-2 col-form-label">
                                Password
                           </label>
                            <div className="col-sm-6">
                                <input type="password" className="form-control wbdv-password-fld" id="wbdv-password" 
                                placeholder="123qwe#$%" onChange={this.changeProp('password')}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-6">
                                <button className="btn btn-secondary btn-block wbdv-login" id="sign-in"
                                onClick={this.loginUser}>Sign In </button>
                                <div className="row">
                                    <div className="col-6">
                                    </div>
                                    <div className="col-6">
                                        <Link to="/register" className="float-right">Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    User: state.user
})

const mapDispatchToProps = dispatch => ({
    loginUser: (user) => dispatch(loginUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
