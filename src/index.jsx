import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import cssVars from 'css-vars-ponyfill';
import store from 'src/store';
import App from 'src/views/App';
import getEnvironment from 'src/util/environment';
import { setAxiosDefaults } from 'src/util/axios';
import { init as initPretender } from 'src/pretender';

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
