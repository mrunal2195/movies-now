import React, { Component } from 'react';
import '../styles/moviedetail.css';
import { connect } from 'react-redux';
import {flagComment } from '../reducers/actions';

class CommentCard extends Component {

    constructor(props){
        super(props);
    }

    flagComment = () => {
        const comment = {
            id: this.props.comment.id,
            comment: this.props.comment.comment,
            flagCount: this.props.comment.flagCount + 1,
            imdbid: this.props.imdbid
        }

        this.props.flagComment(this.props.comment.id, comment);
        alert("The comment is reported");
    }

    render() {
        return (
            <div class="card comment-card">
                <div className="card-body comment-card-body">
                    <div className="d-flex justify-content-between comment-header">
                        <h8 className="username-comment">{this.props.comment.user.firstname}</h8>
                        <div className="d-flex flag-comment">
                            <i class="fas fa-thumbs-down" onClick={this.flagComment}> &nbsp; {this.props.comment.flagCount}</i>
                        </div>
                    </div>
                    {this.props.comment.comment}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    comments: state.comments
})
const mapDispatcherToprops = dispatch => ({
    flagComment: (commentid, comment) => dispatch(flagComment(commentid, comment))

})
export default connect(mapStateToProps, mapDispatcherToprops)(CommentCard)
