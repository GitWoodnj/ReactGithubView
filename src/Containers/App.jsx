import React from 'react';
import Form from '../components/SearchBar';
import User from '../containers/User';
import '../styles/app.css';

function App() {
  return (
    <div className="App">
      <br />
      <header>
        <div className="appBox">
          <span className="appRepo">
                Git Some Repos
          </span> <br /><br />
          <Form />
        </div>
      </header>
      <div>
        <User />
      </div>
    </div>
  );
}

export default App;
