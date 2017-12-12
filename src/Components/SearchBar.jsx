import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class Form extends Component {
    state = { userName: '' }
    handleSubmit = (event) => {
      event.preventDefault();
      axios.get(`https://api.github.com/users/${this.state.userName}/repos`)
        .then(resp => {
          this.props.onSubmit(resp.data);
        });
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userName}
            onChange={(event) => this.setState({ userName: event.target.value })}
            placeholder="Github User"
            required
          />
          <button type="submit">Submit</button>
        </form>
      );
    }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
