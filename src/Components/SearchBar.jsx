import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import store from '../store/store';

class Form extends Component {
    handleSubmit = (event) => {
      event.preventDefault();
      axios.get(`https://api.github.com/users/${store.userName}/repos`)
        .then(resp => {
          this.props.onSubmit(resp.data);
        });
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={store.userName}
            onChange={(event) => store.dispatch({
              type: 'USER',
              payload: event.target.value
            })}

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
