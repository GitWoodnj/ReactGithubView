import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import Form from '../components/SearchBar';
import User from '../containers/User';
import store from '../store/store';
import '../styles/app.css';

const mapStateToProps = (state) => ({
  ...state,
  repo: state.repo,
  userName: state.userName,
  userUrl: state.userUrl
});

const mapDispatchToProps = (dispatch) => ({
  addNewCard: (cardInfo) => dispatch({ type: 'APP', cardInfo })
});

class App extends Component {
  addNewCard = (cardInfo) => {
    if (cardInfo[0] != null) {
      store.dispatch({
        type: 'APP',
        userName: cardInfo[0].owner.login,
        repo: cardInfo,
        userUrl: cardInfo[0].owner.avatar_url
      });
    } else {
      store.dispatch({
        type: 'APP',
        userName: 'Error! No repos found for user',
        repo: [],
        userUrl: ''
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
            <Provider><Form onSubmit={this.addNewCard} /></Provider>
          </div>

        </header>
        <div>
          <User store={store} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
