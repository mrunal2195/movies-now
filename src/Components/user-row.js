import React, { Component } from 'react';
import '../styles/home.css';
import Userservice from '../Services/userservice';

class UserRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.user.username}</td>
        <td>{this.props.user.email}</td>
        <td>{this.props.user.role}</td>
        <td>{this.props.user.isFlagged === false ? "Yes" : "No"}</td>
        <td>
          <span className="row">
            <i className="col fas fa-trash"></i>
          </span>
        </td>
      </tr>
    )
  }
}

export default UserRow
