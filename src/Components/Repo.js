import React, {Component} from 'react';
import axios from 'axios';
import IssueList from '../Components/IssueList';

class Repo extends Component {
    constructor(){
        super();
        this.state = {
        issue: []
    }}
    
    clickFunc = (event) => {
        axios.get(`https://api.github.com/repos/${this.props.owner.login}/${this.props.name}/issues`)
        .then(resp => this.receiveIssues(resp.data));
    }

    receiveIssues = (issues) => {
        if (issues.length === this.state.issue.length)
        {
            this.setState({issue: []})
        }
        else{
            this.setState({issue: issues});
        }
        
    }
    render(){
        return (
            <div >
                <div onDoubleClick={this.clickFunc} style={{
                    align: 'left' , 
                    marginLeft: 10 , 
                    background: '#78966c',
                    padding: '.6em',
                    boxShadow: '2px 2px 8px Black'}}> 
                    <div style={{align: 'left'}}>
                    <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
                        {this.props.name} 
                    </div>
                    <div style={{fontSize: '.95em'}} >
                        {this.props.description? this.props.description : 'No description.'}</div>
                        <hr/>
                    <div type="date" style={{fontSize: '.75em'}} >
                        Created: {this.props.created_at}</div>
                    <div style={{fontSize: '.75em'}}>
                        Language: {this.props.language} </div>
                    <div style={{fontSize: '.85em'}}>
                        Issues: {this.props.open_issues_count} {' '} 
                    </div>
                    </div>

                    
                </div>
                <IssueList issue={this.state.issue}/>
                <br/>
            </div>
  )
    }
	
};

export default Repo;