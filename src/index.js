import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './views/App';
import Pretender from 'pretender';
import config from './config/app';
import axios from 'axios';
import { setAxiosDefaults } from './util/ajax';

// Include CSS
import '@pagerduty/design-system/dist/standalone.css';
import './styles/styles.css';

import feDataPretender from './pretender/fe-data.js';

setAxiosDefaults(axios);

if (config.PRETENDER) {
  // must use `new Pretender` so it rigs itself up, but we don't need the instance
  // eslint-disable-next-line no-new
  new Pretender(
    feDataPretender
  );
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
