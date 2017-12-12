import React from 'react';
import Repo from '../components/Repo';
import '../styles/user.css';

function User(gitUser) {
  let repoCount;

  if (gitUser.repos.length !== 0) {
    repoCount = `Repos: ${gitUser.repos.length}`;
  } else {
    repoCount = '';
  }

  return (
    <div>
      <div className="user">
        <img alt="" width="150" src={gitUser.user_url} />
        <div className="user-info">
          <div className="name">
            {gitUser.name}
          </div>
          <div className="count">
            {repoCount}
          </div>
        </div>
      </div>
      <div className="col-5">
        {gitUser.repos && gitUser.repos.map(repo => <Repo {...repo} key={repo.id} />)}
      </div>

    </div>
  );
}


export default User;
