import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { connect } from 'react-redux';
import Issue from '../components/Issue';
import '../styles/repo.css';
import * as action from '../actions/actionCreator';


const mapStateToProps = (state) => ({
  issues: state.issues,
  repos: state.repo
});

const mapDispatchToProps = (dispatch) => ({
  selectRepo: (user, repo) => dispatch(action.showIssues(user, repo))
});

class Repo extends Component {
    clickFunc = () => {
      if (this.props.open_issues_count !== '0') {
        this.props.selectRepo(this.props.user, this.props.repoName);
      }
    }
    render() {
      const repo =
      (this.props.repos && this.props.repos.filter(x => x.id === this.props.repoId)[0]) || {};
      Moment.locale('en');
      return (
        <div >
          <div
            onDoubleClick={this.clickFunc}
            className="repo"
          >
            <div className="repoText">
              <div className="name">
                {repo.name}
              </div>
              <div className="description" >
                {repo.description ? repo.description : 'No description.'}
              </div>
              <hr />
              <div type="date" className="date" >
                        Created: {Moment(repo.created_at).format('MMM DD, YYYY - h:mm a')}
              </div>
              <div className="language" >
                        Language: {repo.language}
              </div>
              <div className="issueCount" >
                        Issues: {repo.open_issues_count} {' '}
              </div>
            </div>
          </div>
          <div>
            {this.props.issues &&
              this.props.issues[this.props.repoName] &&
              this.props.repoName &&
              this.props.issues[this.props.repoName].map(issue =>
                (<Issue
                  issueId={issue.id}
                  commentCount={issue.comments}
                  issueName={issue.title}
                  commentsUrl={issue.comments_url}
                  user={issue.user.login}
                  key={issue.id}
                />))}
          </div>
          <br />
        </div>
      );
    }
}

Repo.propTypes = {
  open_issues_count: PropTypes.number.isRequired,
  selectRepo: PropTypes.func.isRequired,
  user: PropTypes.any.isRequired,
  repoName: PropTypes.string.isRequired,
  issues: PropTypes.array.isRequired,
  repos: PropTypes.array.isRequired,
  repoId: PropTypes.any.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Repo);
