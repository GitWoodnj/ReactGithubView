import React from 'react';
import '../styles/comment.css';

function Comment(prop) {
  return (
    <div>
      <br />
      <div className="commentBox">
        <div className="body">{prop.commentText}</div>
      </div>
    </div>
  );
}

export default Comment;
