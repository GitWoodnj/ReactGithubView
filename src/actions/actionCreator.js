export function changeUser(text) {
  return {
    type: 'USERS',
    text
  };
}

export function showRepos(repo, userName, userUrl) {
  return {
    type: 'APP',
    repo,
    userName,
    userUrl
  };
}

export function showIssues(repo) {
  return {
    type: 'REPO',
    repo
  };
}

export function showComments(issue) {
  return {
    type: 'ISSUE',
    issue
  };
}

