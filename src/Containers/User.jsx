import React from 'react';
import Repo from '../Components/Repo';

function User(gitUser) {
  let repoCount;

  if (gitUser.repos.length !== 0) {
    repoCount = `Repos: ${gitUser.repos.length}`;
  } else {
    repoCount = '';
  }

  return (
    <div>
      <div style={{ margin: '1em' }}>
        <img alt="" width="150" src={gitUser.user_url} />
        <div style={{ display: 'inline-block', marginLeft: 10, verticalAlign: 'top' }}>
          <div style={{
            fontWeight: 'bold', fontSize: '2.25em', fontVariant: 'small-caps', tegitUsertShadow: '2pgitUser 2pgitUser 8pgitUser Black'
          }}
          >
            {gitUser.name}
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '1.5em', tegitUsertShadow: '2pgitUser 2pgitUser 8pgitUser Black' }}>
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
