import React, { Component } from 'react';
import { connect } from 'react-redux';
import {followUser, unfollowUser} from '../reducers/actions';
import '../styles/moviedetail.css';

class Follow extends Component {

    followUser = () => {
        this.props.followUser(this.props.user.id, this.props.followeeId);
    }

    unfollowUser = () => {
        this.props.unfollowUser(this.props.user.id, this.props.followeeId);
    }
  
    render() {
    console.log(this.props.followedUsers);
    const isFollow = this.props.followedUsers.find(f => f.id === this.props.followeeId);
    return (
      <div>
        {(isFollow) &&
            <i className="fas fa-user-plus unfollow" onClick={this.unfollowUser}></i>
        }
        {(!isFollow) &&
            <i className="far fa-user follow" onClick={this.followUser}></i>
        }
      
      </div>
    )
  }
}

const mapStateToProps = state => ({
    user: state.user,
    followedUsers: state.followedUsers || []
})

const mapDispatcherToProps = dispatch => ({
    unfollowUser: (userId, followeeId) => dispatch(unfollowUser(userId, followeeId)),
    followUser: (userId, followeeId) => dispatch(followUser(userId, followeeId))
})

export default connect(mapStateToProps, mapDispatcherToProps)(Follow)

