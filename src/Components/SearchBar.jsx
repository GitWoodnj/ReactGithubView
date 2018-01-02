import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from '../actions/actionCreator';

const mapStateToProps = (state) => ({
  userName: state.userName,
});

const mapDispatchToProps = (dispatch) => ({
  selectUser: (username) => dispatch(action.showRepos(username))
});

class Form extends Component {
    state = { userName: '' }
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.selectUser(this.state.userName);
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
  selectUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
