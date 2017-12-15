import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../styles/issue.css';
import store from '../store/store';
import CommentList from '../components/CommentList';

export default class Issue extends Component {
    clickButt = () => {
      axios.get(`${this.props.comments_url}`)
        .then(response => {
          if (response.data.length === store.comment.length) {
            store.dispatch({
              type: 'ISSUE',
              payload: []
            });
          } else {
            store.dispatch({
              type: 'ISSUE',
              payload: response.data
            });
          }
        });
    }
    render() {
      return (
        <div className="issueBox">
          <br />
          <div onDoubleClick={this.clickButt}>
            <div className="body">
              <div className="bodyInfo">Issue: {this.props.title}</div>
              <div> User: {this.props.user.login}</div>
              <div> Comments: {this.props.comments}</div>
            </div>
            <CommentList comment={store.comment} />
          </div>
          <br />
        </div>
      );
    }
}

Issue.propTypes = {
  comments_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  comments: PropTypes.number.isRequired
};
