import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoviesOfFollowers } from '../reducers/actions';
import MovieGrid from '../Containers/movie-grid';

class FollowingMovies extends Component {

    constructor(props){
        super(props);
        this.props.getMoviesOfFollowers(this.props.user.id);
    }


    renderMoviesByFollowers = () => {
        const followermovies = this.props.followermovies || {};
        const users = Object.keys(followermovies);
        const rendermovies = users.map(user =>
        <div className="mb-4">
        <h4 className="border-bottom">Movies Liked By {user}....</h4>
        {console.log(followermovies.user)}
        <MovieGrid movies={followermovies[user]}/>
        </div>)

        return rendermovies;
    }

    render() {
    return (
        <div className="mt-5">
         {this.renderMoviesByFollowers()}
        </div>
       
    )
  }
}

const mapStateToProps = state => ({
    user: state.user,
    followedUsers: state.followedUsers,
    followermovies: state.followermovies

})

const mapDispatcherToprops = dispatch => ({
    getMoviesOfFollowers: (userid) => dispatch(getMoviesOfFollowers(userid))
})


export default connect(mapStateToProps, mapDispatcherToprops)(FollowingMovies)
