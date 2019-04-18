import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getFlaggedComments } from '../reducers/actions';
import ReportRow from '../Components/report-row';

class Report extends Component {

    constructor(props) {
        super(props);
        this.props.getFlaggedComments();
    }


    renderComments = () => {
        const comments = this.props.reportedComments || [];
        const reports = comments.map(comment => <ReportRow key={comment.id} comment={comment}/>);
        return reports;
    }


    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Comment By</th>
                            <th scope="col">Comment</th>
                            <th scope="col">flagCount</th>
                            <th scope="col">Unflag</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderComments()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    reportedComments: state.reportedComments
})

const mapDispatchToProps = dispatch => ({
    getFlaggedComments: () => dispatch(getFlaggedComments())
})

export default connect(mapStateToProps, mapDispatchToProps)(Report)
