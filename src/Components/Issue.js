import ReactDOM from 'react';
import React, {Component} from 'react';
import axios from 'axios';
import CommentList from '../Components/CommentList';
import {Comment} from './Comment';

export default class Issue extends Component {
    constructor(){
        super();
        this.state = {
            comment: []
        }
    }
    
    clickButt = (event) => {
        axios.get(`${this.props.comments_url}`)
             .then(response =>
            {
                if (response.data.length == this.state.comment.length)
                {
                    this.setState({comment: []})
                }
                else
                {
                    this.setState(prevState => (
                    {
                        comment: response.data
                    } 
                    ));
                }
                
            });
            () => window.history.pushState('/commentList');
    }
    render(){
        return(
            <div style={{ align: 'left', margin: '1em', marginLeft: '2em', background: '#4f8b96', boxShadow: '2px 2px 8px Black'}}>
                <br/>
                <div onDoubleClick={this.clickButt}>
                    <div style={{align: 'left', padding: '0.4em'}}> 
                    <div style={{fontWeight: 'bold'}}>Issue: {this.props.title}</div>
                    <div> User: {this.props.user.login}</div>
                    <div> Comments: {this.props.comments}</div>
                </div>
                <CommentList comment={this.state.comment}/>
                </div>
                <br/>
            </div>
        );
    }
}