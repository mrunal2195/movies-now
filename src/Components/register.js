import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { registerUser } from '../reducers/actions';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            username:"",
            email:"",
            password:"",
            verifyPassword:"",
            role:"VIEWER"
        }
    }

    registerUser = e => {
        e.preventDefault();
        console.log("called", this.state)
        if(this.state.password === this.state.verifyPassword){
            this.props.registerUser(this.state);
        }
        else{
            alert("Passwords don't match, please enter correct password");
        }
           

    }

    changeProp = prop => e => {
        this.setState({
            [prop] : e.target.value
        })
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
                                <div className="navbar-nav ml-auto"></div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <form className="register-form">
                        <h1>Sign Up Here ....</h1>
                        <br />
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                                First name
                        </label>
                            <div className="col-sm-6">
                                <input className="form-control" id="wbdv-firstname" placeholder="Alice" onChange={this.changeProp('firstname')}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                                Last name
                        </label>
                            <div className="col-sm-6">
                                <input className="form-control" id="wbdv-lastname" placeholder="Wonderland" onChange={this.changeProp('lastname')} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                                Username
                        </label>
                            <div className="col-sm-6">
                                <input className="form-control" id="wbdv-username" placeholder="alice" onChange={this.changeProp('username')}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                                Password
                        </label>
                            <div className="col-sm-6">
                                <input type="password" className="form-control wbdv-password-fld" id="wbdv-password" 
                                    placeholder="123qwe#$%" onChange={this.changeProp('password')}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                                Verify Password
                        </label>
                            <div className="col-sm-6">
                                <input type="password" className="form-control wbdv-password-fld" id="wbdv-v-password" 
                                    placeholder="123qwe#$%" onChange={this.changeProp('verifyPassword')} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                                Role
                        </label>
                            <div className="col-sm-6">
                                <select className="form-control" id="exampleFormControlSelect1" onChange={this.changeProp('role')}>
                                    <option value="VIEWER">Viewer</option>
                                    <option value="MODERATOR">Moderator</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-6">
                                <button className="btn btn-secondary btn-block wbdv-login" id="sign-in"
                                    onClick={this.registerUser}>Sign Up </button>
                                <div className="row">
                                    <div className="col-6">
                                        <Link to="/login">Log In</Link>
                                    </div>
                                    <div className="col-6">
                                        <Link className="float-right" to="/home">Home</Link>
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
    registerUser: (user) => dispatch(registerUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
