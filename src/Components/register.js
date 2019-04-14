import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Register extends Component {

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
                                <div class="navbar-nav ml-auto"></div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="container">
                <form class="register-form">
                    <h1>Sign Up Here ....</h1>
                    <br />
                    <div class="form-group row">
                        <label for="firstname" class="col-sm-2 col-form-label">
                            First name
                        </label>
                        <div class="col-sm-6">
                            <input class="form-control" id="wbdv-firstname" placeholder="Alice"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="lastname" class="col-sm-2 col-form-label">
                            Last name
                        </label>
                        <div class="col-sm-6">
                            <input class="form-control" id="wbdv-lastname" placeholder="Wonderland" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="username" class="col-sm-2 col-form-label">
                            Username
                        </label>
                        <div class="col-sm-6">
                            <input class="form-control" id="wbdv-username" placeholder="alice" />
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
                        <label for="verify password" class="col-sm-2 col-form-label">
                            Verify Password
                        </label>
                        <div class="col-sm-6">
                            <input type="password" class="form-control wbdv-password-fld" id="wbdv-v-password" placeholder="123qwe#$%"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"></label>
                        <div class="col-sm-6">
                                <button class="btn btn-primary btn-block wbdv-login" id="sign-in">Sign Up </button>
                            <div class="row">
                                <div class="col-6">
                                    <Link to="/login">Log In</Link>
                                </div>
                                <div class="col-6">
                                    <Link className="float-right" to="/home">cancel</Link>
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
