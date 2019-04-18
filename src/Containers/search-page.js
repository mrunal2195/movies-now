import React, { Component } from 'react';
import '../styles/home.css';
import MovieGrid from '../Containers/movie-grid'
import { connect } from 'react-redux';
import { searchMovies } from '../reducers/actions';

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            word: this.props.match.params.searchWord
        }
    }
    
    componentWillMount = () => {
        this.props.searchMovies(this.props.match.params.searchWord, 20);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        search results for {this.state.word} ....
                    </div>
                    <div className="row movie-searchs">
                        <MovieGrid movies={this.props.searchResults}></MovieGrid>
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    searchResults: state.searchResults
});

const mapDispatchToProps = dispatch => ({
    searchMovies: (keyword, count) => dispatch(searchMovies(keyword, count))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
