import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, getComments } from '../reducers/actions';
import CommentCard from '../Components/comment-card';



class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        }
        this.props.getComments(this.props.imdbid);
    }

    changeProp = prop => e =>{
        this.setState({
            [prop] : e.target.value
        })
    }

    renderComments = () => {
        const comments = this.props.comments || [];
        const renderComments = comments.map(comment => 
        <CommentCard key={comment.id} comment={comment} imdbid={this.props.imdbid}/>)
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
        //need to set commentarea empty
        //need to update a list of comments to add a new comment
    }


    render() {
        return (
            <div className="col-md-6 col-sm-12">
                <h2>Comments</h2>
                {this.renderComments()}
                <div className="form">
                    <div className="form-group">
                        <textarea className="form-control comment-editor" rows="3" 
                            placeholder="write your comment here" onChange={this.changeProp('comment')} value={this.state.comment}>
                        </textarea>
                        <button className="btn btn-dark mb-2 float-right"onClick={this.addComment}>comment</button>
                    </div>
                </div>
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