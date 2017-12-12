import React from 'react';
import PropTypes from 'prop-types';
import Issue from '../Components/Issue';

const IssueList = (props) => (
  <div>
    {props.issue && props.issue.map(issue => <Issue {...issue} key={issue.id} />)}
  </div>
);

IssueList.propTypes = {
  issue: PropTypes.array.isRequired
};

export default (IssueList);
