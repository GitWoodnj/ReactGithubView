import React, { Component } from 'react';

class Comment extends Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div> 
                <br/>
                <div style={{align: 'left', marginLeft: '3em', borderLeft: '2px solid #ffffff'}}>
                    <div style={{align: 'left', marginLeft: '.5em'}}>{this.props.body}</div>
                    <div style={{align: 'left', marginLeft: '1em', fontWeight: 'bold'}}>{ ' - ' }{this.props.user.login} {' '} {this.props.created_at}</div>
                </div>
            </div>
        );
    }
}

export default Comment;