import environmentVariables from '../scripts/environment-variables';

const urls = {
  production: 'https://d30g1epxm0pa0g.cloudfront.net',
  staging: 'https://d30g1epxm0pa0g.cloudfront.net',
  development: 'http://localhost:4200'
};

const s3 = {
  production: {
    bucket: 'pd-frontendcore',
    region: 'us-west-2'
  },
  staging: {
    bucket: 'pd-frontendcore-stg',
    region: 'us-west-2'
  },
  development: {
    bucket: 'pd-frontendcore-stg',
    region: 'us-west-2'
  }
};

export const s3Settings = s3[environmentVariables.REACT_APP_ENV];
export const url = urls[environmentVariables.REACT_APP_ENV];
