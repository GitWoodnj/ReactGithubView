import React from 'react';

function Comment(prop) {
  return (
    <div>
      <br />
      <div style={{ align: 'left', marginLeft: '3em', borderLeft: '2px solid #ffffff' }}>
        <div style={{ align: 'left', marginLeft: '.5em' }}>{prop.body}</div>
        <div style={{ align: 'left', marginLeft: '1em', fontWeight: 'bold' }}>{ ' - ' }{prop.user.login} {' '} {prop.created_at}</div>
      </div>
    </div>
  );
}

export default Comment;
