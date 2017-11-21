import React from 'react';
import ReactDOM from 'react-dom';
import RoutedApp from './Containers/RoutedApp';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoutedApp />, div);
});
