import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsermovies } from '../reducers/actions';
import MovieGrid from '../Containers/movie-grid';
import FollowingMovies from '../Containers/following-movies';

class Likedmovies  extends Component {
  
  constructor(props){
    super(props);
  }
  
  
  render() {
    return (
      <div className="container">
        <div className="mb-5">
          <h4 className="border-bottom">See what your friends are doing:</h4>
          <h7 className="text-muted">This feed shows movies you loved so far...and movie activities of your freinds</h7>  
        </div>
        {(this.props.user && this.props.usermovies) ? (
          <React.Fragment>
            <h4 className="border-bottom">Your Movies.....</h4>
            <MovieGrid movies={this.props.usermovies}></MovieGrid>
          </React.Fragment>
        ):(
          <h3>You haven't liked any movies so far... </h3>
        )
       } 
        <FollowingMovies/>   
      </div>
    )
  }
}


const mapStateToprops = state => ({
  user: state.user,
  usermovies: state.usermovies
})

const mapDispatchToProps = dispatch => ({
  getUsermovies: (userId) => dispatch(getUsermovies(userId))
})

export default connect(mapStateToprops, mapDispatchToProps)(Likedmovies)
