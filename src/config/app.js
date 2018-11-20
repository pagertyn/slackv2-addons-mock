import { s3Settings, url } from './deployment';
import developmentConfig from './development';
import environmentVariables from '../scripts/environment-variables';

let environmentSpecificConfig = {
  APP_KEY: 'react-skeleton',
  APP_NAME: 'React Skeleton',
  FEATURE_FLAG: 'react_skeleton',
  API_BASE_PATH: '/api/v1/',
  NON_API_BASE_PATH: '/',
  ENVIRONMENT: environmentVariables.REACT_APP_ENV,
  PRETENDER: false,
  ...s3Settings,
  url
};

if (environmentSpecificConfig.ENVIRONMENT === 'development') {
  environmentSpecificConfig = { ...environmentSpecificConfig, ...developmentConfig };
}

const config = environmentSpecificConfig;

export default config;
