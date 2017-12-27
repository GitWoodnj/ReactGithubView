import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from '../actions/actionCreator';

const mapStateToProps = (state) => ({
  userName: state.userName,
});

const mapDispatchToProps = (dispatch) => ({
  updateUsername: (event) => dispatch({ type: 'UPDATE_USERNAME', value: event.target.value }),
  selectUser: (username) => dispatch(action.showRepos(username))
});

class Form extends Component {
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.selectUser(this.props.userName);
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.props.userName}
            onChange={this.props.updateUsername}
            placeholder="Github User"
            required
          />
          <button type="submit">Submit</button>
        </form>
      );
    }
}

Form.propTypes = {
  userName: PropTypes.string.isRequired,
  selectUser: PropTypes.func.isRequired,
  updateUsername: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
