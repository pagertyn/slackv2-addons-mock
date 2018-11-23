import developmentConfig from './development';
import environmentVariables from '../scripts/environment-variables';

const appConfig = {
  FEATURE_FLAG: 'react_skeleton',
  API_BASE_PATH: '/api/v1/',
  NON_API_BASE_PATH: '/',
  ENVIRONMENT: environmentVariables.NODE_ENV,
  ...(this.ENVIRONMENT === 'development' ? developmentConfig : {})
};

console.log('===================================');
console.log(appConfig);

export default appConfig;
