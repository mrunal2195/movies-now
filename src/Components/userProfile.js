import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAnotherUser } from '../reducers/actions';
import MovieGrid from '../Containers/movie-grid';
import Follow from '../Components/follow-unfollow';
import '../Containers/home';

class UserProfile extends Component {


  constructor(props) {
    super(props);
    this.props.getAnotherUser(this.props.match.params.id);
  }

  renderFollowers = () => {
    const follows = this.props.user.follows || [];
    const renderFollows = follows.map(follow => (
      <button type="button" class="btn btn-primary m-1">
        {follow.firstname} <span class="badge badge-light">
          <Follow followeeId={follow.id} />
        </span>
      </button>
    ))
    return renderFollows;
  }


  render() {
    return (
      <div>
        {(this.props.user) &&
          <div className="container">
            <div className="d-flex justify-content-start border-bottom mb-2">
              <h1 className="userName">{this.props.user.username}'s Profile</h1>
              {(this.props.loggedInUser) &&
                <h1><Follow followeeId={this.props.user.id} /></h1>
              }
            </div>
            {(this.props.loggedInUser) &&
              <div className="border-bottom mb-2">
               <h6 className="text-muted">Test follows following people....</h6>
                {this.renderFollowers()}
              </div>
            }
           
                <h4>Favourite Movie's: </h4>
                <MovieGrid movies={this.props.user.movies} />
          </div>
              }
      </div>
            )
          }
        }
        
const mapStateToprops = state => ({
              loggedInUser: state.user,
            user: state.userProfile
          
          })
          
const mapDispatchToProps = dispatch => ({
              getAnotherUser: (userId) => (dispatch(getAnotherUser(userId)))
          })
          
          export default connect(mapStateToprops, mapDispatchToProps)(UserProfile)
