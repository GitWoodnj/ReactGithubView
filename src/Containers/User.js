import React, { Component } from 'react';
import Repo from '../Components/Repo';

class User extends Component {  
  render(){

    var repoCount;

    if(this.props.repos.length !== 0)
      {
        repoCount = `Repos: ${this.props.repos.length}`;
      }
    else
    {
      repoCount = '';
    }

    return (
    <div>
      <div style={{margin: '1em'}}>
        <img alt='' width="150" src={this.props.user_url}/>
        <div style={{display: 'inline-block', marginLeft: 10, verticalAlign: 'top'}}>
          <div style={{fontWeight: 'bold', fontSize: '2.25em', fontVariant: 'small-caps', textShadow: '2px 2px 8px Black'}}>
            {this.props.name}
          </div>
          <div style={{fontWeight: 'bold', fontSize: '1.5em', textShadow: '2px 2px 8px Black'}}>
            {repoCount}
          </div>
        </div>
      </div>
        <div className="col-5"> 
          {this.props.repos && this.props.repos.map(repo => <Repo {...repo} key={repo.id} />)}
        </div>

    </div>
  );
  }
	
}

export default User;