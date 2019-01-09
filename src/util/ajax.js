/* eslint-disable no-param-reassign */

import config from '../config/app';

export const setAxiosDefaults = (axios) => {
  axios.defaults.baseURL = config.API_BASE_PATH;
  axios.defaults.headers.common['X-PagerDuty-Api-Local'] = 1;
  axios.defaults.headers.common.Accept = 'application/vnd.pagerduty+json;version=2';
};

export default setAxiosDefaults;
