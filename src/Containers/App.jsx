import React, { Component } from 'react';
import '../Containers/App.css';
import Form from '../Components/SearchBar';
import User from '../Containers/User';


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
          <div style={{ textAlign: 'center', width: '100%' }}>
            <span style={{
              fontSize: '5.0em',
              fontWeight: 'bold',
              fontFamily: 'Baskerville',
              fontVariant: 'small-caps',
              textShadow: '2px 2px 8px Black'
            }}
            >
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
