import axios from 'axios';

export function changeUser(text) {
  return {
    type: 'USERS',
    text
  };
}

export function showRepos(value) {
  return (dispatch) => axios.get(`https://api.github.com/users/${value}/repos`)
    .then(resp => {
      dispatch({
        type: 'SELECT_USER',
        data: resp.data
      });
    });
}

export function showIssues(user, repo) {
  return (dispatch) => axios.get(`https://api.github.com/repos/${user}/${repo}/issues`)
    .then(resp => {
      dispatch({
        type: 'REPO_SELECTED',
        data: resp.data,
        id: repo
      });
    });
}
export function showComments(commentUrl, issueId) {
  return (dispatch) => axios.get(`${commentUrl}`)
    .then(response => {
      if (response.data.length === 0) {
        dispatch({
          type: 'ISSUE_SELECTED',
          data: [],
          id: ''
        });
      } else {
        dispatch({
          type: 'ISSUE_SELECTED',
          data: response.data,
          id: issueId
        });
      }
    });
}

