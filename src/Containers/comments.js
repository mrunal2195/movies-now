import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, getComments } from '../reducers/actions';
import CommentCard from '../Components/comment-card';
import '../styles/moviedetail.css';


class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        }
        this.props.getComments(this.props.imdbid);
    }

    changeProp = prop => e => {
        this.setState({
            [prop]: e.target.value
        })
    }

    renderComments = () => {
        const comments = this.props.comments || [];
        const renderComments = comments.map(comment =>
            <CommentCard key={comment.id} comment={comment} imdbid={this.props.imdbid} />)
        return renderComments;
    }

    addComment = e => {
        e.preventDefault();
        console.log("addcomment called")
        const comment = {
            imdbid: this.props.imdbid,
            comment: this.state.comment,
            flagCount: 0
        }
        this.props.addComment(this.props.user.id, comment);
        this.setState({
            comment: ''
        })
    }


    render() {
        return (
            <div className="comments-section">
                <h2>Comments</h2>
                {this.renderComments()}
                {(this.props.user) ?
                    (<React.Fragment>
                        <div className="form">
                            <div className="form-group">
                                <textarea className="form-control comment-editor" rows="3"
                                    placeholder="write your comment here" onChange={this.changeProp('comment')} value={this.state.comment}>
                                </textarea>
                                <button className="btn btn-dark mb-2 float-right" onClick={this.addComment}>comment</button>
                            </div>
                        </div>
                    </React.Fragment>) : (
                        <React.Fragment>
                            <div class="alert alert-success login-alert" role="alert">
                                Please log in to leave a comment !!
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    comments: state.comments
})

const mapDispatcherToProps = dispatch => ({
    addComment: (userId, comment) => dispatch(addComment(userId, comment)),
    getComments: (imdbid) => dispatch(getComments(imdbid))
})

export default connect(mapStateToProps, mapDispatcherToProps)(Comment)