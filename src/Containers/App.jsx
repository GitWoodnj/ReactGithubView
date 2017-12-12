import React, { Component } from 'react';
import '../containers/App.css';
import Form from '../components/SearchBar';
import User from '../containers/User';
import '../styles/app.css';

class App extends Component {
  state = {
    repos: [],
    userName: '',
    userURL: ''
  };

  addNewCard = (cardInfo) => {
    if (cardInfo[0] != null) {
      this.setState(() => ({
        repos: cardInfo,
        userName: cardInfo[0].owner.login,
        userURL: cardInfo[0].owner.avatar_url
      }));
    } else {
      this.setState(() => ({
        userName: 'ERROR! User repo not found',
        repos: [],
        userURL: ''

      }));
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
          <User repos={this.state.repos} name={this.state.userName} user_url={this.state.userURL} />
        </div>
      </div>

    );
  }
}

export default App;
