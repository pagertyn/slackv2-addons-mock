import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Pretender from 'pretender';
import axios from 'axios';
import store from './store';
import App from './views/App';
import getEnvironment from './util/environment';
import { setAxiosDefaults } from './util/ajax';
import cssVars from 'css-vars-ponyfill';

// Include CSS
import '@pagerduty/design-system/dist/standalone.css';
import './styles/styles.css';

import feDataPretender from './pretender/fe-data';

setAxiosDefaults(axios);

if (getEnvironment() === 'development') {
  // must use `new Pretender` so it rigs itself up, but we don't need the instance
  // eslint-disable-next-line no-new
  new Pretender(
    feDataPretender
  );
}

// make css vars work in older browsers
cssVars({
  // set this to false to see the effects in Chrome
  onlyLegacy: true
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
