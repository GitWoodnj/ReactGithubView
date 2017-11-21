import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Repo from '../Components/Repo'
import Issue from '../Components/Issue'
import App from '../Containers/App'

class RoutedApp extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/Repo' component={Repo} />
        <Route path='/Issue' component={Issue} />
      </Router>
    )
  }
}

export default RoutedApp;