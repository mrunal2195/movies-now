import React, { Component } from 'react';
import '../styles/home.css';
import Userservice from '../Services/userservice';

class UserRow extends Component {

  constructor(props){
    super(props);
  }

  deleteUser = (userId) => {
    console.log(userId)
    this.props.deleteUser(userId);
  }
  render() {
    return (
      <tr>
        <td>{this.props.user.username}</td>
        <td>{this.props.user.email}</td>
        <td>{this.props.user.role}</td>
        <td>{this.props.user.isFlagged === false ? "Yes" : "No"}</td>
        <td>
          <span className="row">
            <i className="col fas fa-trash" onClick={() => this.deleteUser(this.props.user.id)}></i>
          </span>
        </td>
      </tr>
    )
  }
}

export default UserRow
