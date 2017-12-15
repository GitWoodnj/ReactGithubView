import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/SearchBar';
import User from '../containers/User';
import store from '../store/store';
import '../styles/app.css';

const mapStateToProps = (state) => ({
  ...state,
  repos: state.repo,
  userName: state.userName,
  userUrl: state.userUrl
});

class App extends Component {
  addNewCard = (cardInfo) => {
    if (cardInfo[0] != null) {
      store.dispatch({
        type: 'APP',
        user: cardInfo[0].owner.login,
        repoArr: cardInfo,
        URL: cardInfo[0].owner.avatar_url
      });
    } else {
      store.dispatch({
        type: 'APP',
        user: 'Error! No repos found for user',
        repoArr: [],
        URL: ''
      });
    }
  };

  render() {
    return (
      <div className="App">
        <br />
        <header>
          <div className="appBox">
            <span className="appRepo">
                Git Some Repos
            </span> <br /><br />
            <Form onSubmit={this.addNewCard} />
          </div>

        </header>
        <div>
          <User repos={this.props.repos} name={this.props.userName} user_url={this.props.userUrl} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  repos: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired,
  userUrl: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(App);
