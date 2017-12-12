import React from 'react';
import '../styles/comment.css';

function Comment(prop) {
  return (
    <div>
      <br />
      <div className="commentBox">
        <div className="body">{prop.body}</div>
        <div className="info">{ ' - ' }{prop.user.login} {' '} {prop.created_at}</div>
      </div>
    </div>
  );
}

export default Comment;
