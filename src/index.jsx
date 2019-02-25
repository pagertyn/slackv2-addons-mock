import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import cssVars from 'css-vars-ponyfill';
import store from './store';
import App from './views/App';
import getEnvironment from './util/environment';
import { setAxiosDefaults } from './util/axios';
import { init as initPretender } from './pretender';

// Include CSS
import '@pagerduty/design-system/dist/standalone.css';
import './styles/styles.css';

setAxiosDefaults(axios);

if (getEnvironment() === 'development') {
  initPretender();
}

// make css vars work in older browsers
cssVars({
  // set this to false to see the effects in Chrome
  onlyLegacy: true
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
