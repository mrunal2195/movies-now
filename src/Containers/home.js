import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import MovieGrid from './movie-grid';
import { connect } from 'react-redux';
import { loadMovies,getAllUsersForAdmin } from '../reducers/actions';

class Home extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.getMovies();
        this.props.getAllUsersForAdmin();
    }


    render() {
        return (
            <div>
                <div className="container">
                    <MovieGrid movies={this.props.movies}></MovieGrid>
                    {(this.props.user && this.props.user.role === 'ADMIN') && (<h1>HELLO</h1>)}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
       movies : state.user && state.user.role === 'ADMIN' ? [] : state.movies,
       user: state.user,
       allUsersForAdmin: state.allUsersForAdmin
    })
};

const mapDispatchToProps = (dispatch) => ({
    
    getMovies: () => dispatch(loadMovies()),
    getAllUsersForAdmin: () => dispatch(getAllUsersForAdmin())
   
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
