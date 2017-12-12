import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../components/Comment';

const CommentList = (props) =>
  (
    <div>
      {props.comment && props.comment.map(comment => <Comment {...comment} key={comment.id} />)}
    </div>
  );

CommentList.propTypes = {
  comment: PropTypes.array.isRequired
};
export default (CommentList);
