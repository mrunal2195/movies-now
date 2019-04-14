import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Login extends Component {

    render() {
        return (
            <div>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark wbdv-nvbar">
                        <Link className="navbar-brand wbdv-movie-header" to="/home">Movies Now !!</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav ml-auto justify-content-between">
                                <div class="navbar-nav ml-auto">
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="container">
                    <form class="sign-in-form">
                        <h1>Log In Here....</h1>
                        <br />
                        <div class="form-group row">
                            <label for="username" class="col-sm-2 col-form-label">
                                Username
                        </label>
                            <div class="col-sm-6">
                                <input class="form-control" id="wbdv-username" placeholder="Alice" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="password" class="col-sm-2 col-form-label">
                                Password
                           </label>
                            <div class="col-sm-6">
                                <input type="password" class="form-control wbdv-password-fld" id="wbdv-password" placeholder="123qwe#$%" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label"></label>
                            <div class="col-sm-6">
                                <button class="btn btn-primary btn-block wbdv-login" id="sign-in">Sign In </button>
                                <div class="row">
                                    <div class="col-6">
                                    </div>
                                    <div class="col-6">
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
