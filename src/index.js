import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './store/store';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); //eslint-disable-line
registerServiceWorker();
