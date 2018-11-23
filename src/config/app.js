import environmentVariables from '../scripts/environment-variables';

const appConfig = {
  FEATURE_FLAG: 'react_skeleton',
  API_BASE_PATH: '/api/v1/',
  NON_API_BASE_PATH: '/',
  ENVIRONMENT: environmentVariables.NODE_ENV,
};

export default appConfig;
