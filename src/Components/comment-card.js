import React, { Component } from 'react';
import '../styles/moviedetail.css';
import { connect } from 'react-redux';
import {flagComment} from '../reducers/actions';
import Follow from '../Components/follow-unfollow';

class CommentCard extends Component {

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
            <div className="card comment-card">
                <div className="card-body comment-card-body">
                    <div className="d-flex justify-content-between comment-header">
                        <div className="d-flex justify-content-between">
                            <h6 className="username-comment">{this.props.comment.user.firstname}</h6>
                            <Follow followeeId = {this.props.comment.user.id}/>
                        </div>
                        <div className="d-flex flag-comment">
                            <i className="fas fa-thumbs-down" onClick={this.flagComment}> &nbsp; {this.props.comment.flagCount}</i>
                        </div>
                    </div>
                    {this.props.comment.comment}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    user: state.user,
    comments: state.comments,
    followedUsers: state.followedUsers
})
const mapDispatcherToprops = dispatch => ({
    flagComment: (commentid, comment) => dispatch(flagComment(commentid, comment))
})
export default connect(mapStateToProps, mapDispatcherToprops)(CommentCard)
