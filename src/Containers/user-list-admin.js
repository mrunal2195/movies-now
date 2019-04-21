import React, { Component } from 'react';
import UserRow from '../Components/user-row';
import '../styles/home.css';

export default class UserListAdmin extends Component {

  renderUserList = () => {
    console.log(this.props)
    let allUsersForAdmin = this.props.allUsersForAdmin || [];
    return allUsersForAdmin.map(user =>
      <UserRow key={user.id} user={user} />)
  }


  render() {
    return (
      <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">isFlagged</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
            {this.renderUserList()}
      </tbody>
    </table>
    )
  }
}
