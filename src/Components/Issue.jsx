import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/issue.css';
import Comment from '../components/Comment';
import * as action from '../actions/actionCreator';


const mapStateToProps = (state) => ({
  comments: state.comments,
  userName: state.userName,
  userUrl: state.userUrl
});

const mapDispatchToProps = (dispatch) => ({
  selectIssue: (commentsUrl, issueId) => dispatch(action.showComments(commentsUrl, issueId))
});


class Issue extends Component {
    clickButt = () => {
      this.props.selectIssue(this.props.commentsUrl, this.props.issueId);
    }
    render() {
      const comments = (
        this.props.comments &&
        this.props.comments[this.props.issueId] &&
        this.props.issueId &&
        this.props.comments[this.props.issueId])
        || [];

      return (
        <div className="issueBox">
          <br />
          <div onDoubleClick={this.clickButt}>
            <div className="body">
              <div className="bodyInfo">Issue: {this.props.issueName}</div>
              <div> User: {this.props.userName}</div>
              <div> Comments: {this.props.commentCount}</div>
            </div>
            <div>
              {comments && comments.map(comment =>
                <Comment commentText={comment.body} key={comment.id} />)
              }
            </div>
          </div>
          <br />
        </div>
      );
    }
}

Issue.propTypes = {
  comments: PropTypes.array.isRequired,
  selectIssue: PropTypes.func.isRequired,
  commentsUrl: PropTypes.string.isRequired,
  issueId: PropTypes.string.isRequired,
  issueName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
