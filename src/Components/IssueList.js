import ReactDOM from 'react';
import React from 'react';
import Issue from '../Components/Issue';

const IssueList = (props) => 
{
    
	return (
  	<div>
			{props.issue && props.issue.map(issue => <Issue {...issue} key={issue.id} />)}
    </div>
  );
}

export default IssueList;