import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAnotherUser } from '../reducers/actions';
import MovieGrid from '../Containers/movie-grid';
import Follow from '../Components/follow-unfollow';

class UserProfile extends Component {
  

    constructor(props){
      super(props);
      this.props.getAnotherUser(this.props.match.params.id);
    }

    renderFollowers = () => {
      const followers = this.props.user.follows || [];
    }
  
    
    render() {
    console.log(this.props.user);
    return (
      <div>
        {(this.props.user) &&
          <div className="container">
            <div className="d-flex justify-content-between">
            <h1>{this.props.user.username}'s Profile
            </h1>
            </div>
            <h3>Favourite Movie's: </h3>
            <MovieGrid movies={this.props.user.movies}/>
          </div>
        }
      </div>
    )
  }
}

const mapStateToprops = state => ({
  loggedInUser: state.user,
  user : state.userProfile

})

const mapDispatchToProps = dispatch => ({
  getAnotherUser: (userId) => (dispatch(getAnotherUser(userId)))
})

export default connect(mapStateToprops, mapDispatchToProps)(UserProfile)
