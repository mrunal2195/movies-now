import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsermovies } from '../reducers/actions';
import MovieGrid from '../Containers/movie-grid';

class Likedmovies  extends Component {
  
  constructor(props){
    super(props);
    this.props.getUsermovies(this.props.user.id);
  }
  
  
  render() {
    console.log(this.props.usermovies);
    return (
      <div className="container">
        your movies....  
        {this.props.user && this.props.usermovies &&
        <MovieGrid movies={this.props.usermovies}></MovieGrid>}    
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
