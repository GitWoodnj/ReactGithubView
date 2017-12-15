export function changeUser(text) {
  return {
    type: 'getUser',
    text
  };
}

export function showRepos(user) {
  return {
    type: 'getRepos',
    user
  };
}

export function showIssues(repo) {
  return {
    type: 'getIssues',
    repo
  };
}

export function showComments(issue) {
  return {
    type: 'getComments',
    issue
  };
}

