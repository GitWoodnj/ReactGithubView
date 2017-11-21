import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component{
    state = { userName: ''}
    handleSubmit = (event) => {
      event.preventDefault();
      console.log('Event: Form Submit', this.state.userName);
        axios.get(`https://api.github.com/users/${this.state.userName}/repos`)
        .then(resp => {
          this.props.onSubmit(resp.data)
      });
    }
    render(){
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text"
            value ={this.state.userName}
            onChange={(event) => this.setState({ userName: event.target.value })}
            placeholder="Github User" required/>
        <button type="submit">Submit</button>
      </form>
      );
    }
}

export default Form;