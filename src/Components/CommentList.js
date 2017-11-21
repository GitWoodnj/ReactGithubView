import ReactDOM from 'react';
import React from 'react';
import Comment from '../Components/Comment';

const CommentList = (props) => 
{

	return (
  	<div>
			{props.comment && props.comment.map(comment => <Comment {...comment} key={comment.id} />)}
    </div>
  );
}

export default CommentList;