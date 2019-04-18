import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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

    componentDidUpdate = () => {
        if(this.props.user){
            this.props.history.push('/home');
        }
        // else{
        //     alert("Please Enter correct username and password");
        // }
    }

    changeProp = prop => e => {
        this.setState({
            [prop] : e.target.value
        })
    }

    loginUser = e => {
        e.preventDefault();
        this.props.loginUser(this.state);
    }


    render() {
        return (
            <div>
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
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    loginUser: (user) => dispatch(loginUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
