import { s3Settings, url } from './deployment';
import developmentConfig from './development';
import environmentVariables from '../scripts/environment-variables';

let config = {
  APP_KEY: 'your-app-name-here',
  APP_NAME: 'Your App Name Here',
  FEATURE_FLAG: 'your_app_name_here',
  API_BASE_PATH: '/api/v1/',
  NON_API_BASE_PATH: '/',
  ENVIRONMENT: environmentVariables.REACT_APP_ENV,
  PRETENDER: false,
  ...s3Settings,
  url
};

if (config.ENVIRONMENT === 'development') {
  config = { ...config, ...developmentConfig };
}

export default config;
