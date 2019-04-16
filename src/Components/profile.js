import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../reducers/actions';
class Profile extends Component{

    constructor(props){
        super(props);
        this.state = {
            id : this.props.user.id,
            username:this.props.user.username,
            firstname:this.props.user.firstname,
            lastname:this.props.user.lastname,
            password: this.props.user.password,
            role:this.props.user.role,
            email:this.props.user.email
        }
    }

    chnageProp = prop => e => {
        this.setState({
            [prop] : e.target.value
        })
    }

    updateUser = e => {
        e.preventDefault();
        this.props.updateUser(this.state);
    }
    


    render(){
        return(
            <div className="container">
            <form className="profile-form">
                <h1 id="title">{this.props.user.firstname}'s Profile ...</h1>
                <div className="form-group row">
                    <label for="notification" className="col-sm-2 col-form-label"></label>
                    <div className={"col-sm-10 alert alert-success alert-dismissible fade show "+ (this.state.isSuccess? '' : 'd-none')} role="alert">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                            Profile successfully saved!
                    </div>
                </div>
                <div className="form-group row">
                    <label for="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text" readonly className="form-control-plaintext" id="username" 
                        value={this.state.username}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail" placeholder="Email Id"
                        value={this.state.email} onChange={this.chnageProp("email")}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password"
                        value={this.state.password} onChange={this.chnageProp("password")}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputfirstname" className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputfirstname" placeholder="first name"
                        value={this.state.firstname} onChange={this.chnageProp("firstname")}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputlastname" className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputlastname" placeholder="last name"
                        value={this.state.lastname}
                        onChange={this.chnageProp("lastname")}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputrole" className="col-sm-2 col-form-label">Role</label>
                    <div className="col-sm-10">
                    <input type="text" readonly className="form-control-plaintext" value={this.state.role}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2"></label>
                    <div className="col-sm-10">
                        <button type="button" id="updateBtn" className="btn btn-dark btn-block wbdv-updateProfile"
                        onClick={this.updateUser}>Update Your profile</button>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => ({
       user : state.user
})

const mapDispatchToProps = (dispatch) => ({
    updateUser: user => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);