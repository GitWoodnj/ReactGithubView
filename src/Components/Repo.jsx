import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../styles/repo.css';
import store from '../store/store';
import IssueList from '../components/IssueList';

class Repo extends Component {
    clickFunc = () => {
      axios.get(`https://api.github.com/repos/${this.props.owner.login}/${this.props.name}/issues`)
        .then(resp => this.receiveIssues(resp.data));
    }

    receiveIssues = (issues) => {
      if (issues.length === store.issue.length) {
        store.dispatch({
          type: 'REPO',
          payload: []
        });
      } else {
        store.dispatch({
          type: 'REPO',
          payload: issues
        });
      }
    }
    render() {
      return (
        <div >
          <div
            onDoubleClick={this.clickFunc}
            className="repo"
          >
            <div className="repoText">
              <div className="name">
                {this.props.name}
              </div>
              <div className="description" >
                {this.props.description ? this.props.description : 'No description.'}
              </div>
              <hr />
              <div type="date" className="date" >
                        Created: {this.props.created_at}
              </div>
              <div className="language" >
                        Language: {this.props.language}
              </div>
              <div className="issueCount" >
                        Issues: {this.props.open_issues_count} {' '}
              </div>
            </div>


          </div>
          <IssueList issue={store.issue} />
          <br />
        </div>
      );
    }
}

Repo.propTypes = {
  owner: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  open_issues_count: PropTypes.string.isRequired
};

export default Repo;
