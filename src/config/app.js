import environmentVariables from '../scripts/environment-variables';

const appConfig = {
  FEATURE_FLAG: 'react_skeleton',
  API_BASE_PATH: '/api/v1/',
  NON_API_BASE_PATH: '/',

  // CRA says NODE_ENV is "development" for `react-scripts start` and "production" for `react-scripts build`
  ENVIRONMENT: environmentVariables.NODE_ENV,
};

export default appConfig;
