import React from 'react';
import { connect } from 'react-redux';
import Repo from '../components/Repo';
import '../styles/user.css';

const mapStateToProps = (state) => ({
  userName: state.userName,
  repos: state.repo,
  userUrl: state.userUrl
});

function User(prop) {
  return (
    <div>
      <div className="user">
        <img alt="" width="150" src={prop.userUrl} />
        <div className="user-info">
          <div className="name">
            {prop.userName}
          </div>
          <div className="count">
              Repos: {prop.repos.length}
          </div>
        </div>
      </div>
      <div className="col-5">
        {prop.repos &&
          prop.repos.map(repo =>
            (<Repo
              repoId={repo.id}
              repoName={repo.name}
              user={prop.userName}
              key={repo.id}
            />))}
      </div>

    </div>
  );
}

export default connect(mapStateToProps)(User);
