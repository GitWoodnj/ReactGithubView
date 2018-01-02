import React from 'react';
import Moment from 'moment';
import '../styles/comment.css';

Moment.locale('en');

function Comment(prop) {
  return (
    <div>
      <br />
      <div className="commentBox">
        <div className="body">{prop.commentText}
          <div> - {prop.commentUserName} <br />  {Moment(prop.commentTime).format('MMM DD, YYYY')} at {Moment(prop.commentTime).format('HH:MM A')}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
