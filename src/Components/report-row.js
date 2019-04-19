import React, { Component } from 'react';
import { connect } from 'react-redux';
import {unflagComment, deleteComment} from '../reducers/actions'

class ReportRow extends Component {

    unflagComment = () => {
        this.props.unflagComment(this.props.comment.id);
        alert("comment unflagged");
    }

    deleteComment = () => {
        this.props.deleteComment(this.props.comment.id);
        alert("comment deleted");
    }


    render() {
        return (
            <tr>
                <th scope="row">{this.props.comment.user.firstname}</th>
                <td>{this.props.comment.comment}</td>
                <td>{this.props.comment.flagCount}</td>
                <td>
                    <button className="btn btn-light" onClick={this.unflagComment}>Unflag</button>
                </td>
                <td>
                <button className="btn btn-danger" onClick={this.deleteComment}>Delete</button>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    unflagComment: (commentid) => dispatch(unflagComment(commentid)),
    deleteComment: (commentid) => dispatch(deleteComment(commentid))

})

export default connect(mapStateToProps, mapDispatchToProps)(ReportRow)
