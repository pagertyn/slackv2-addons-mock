import environmentVariables from '../scripts/environment-variables';

const getEnvironment = () => {
  // "development" for `react-scripts start`
  // "production" for `react-scripts build`
  // "test" for `react-scripts test`
  const env = environmentVariables.NODE_ENV;

  if (env === 'development' && window.location.href.indexOf('branch=local') >= 0) {
    // branch-local: when on production, but using the url param to get locally hosted assets
    return 'branch-local';
  }
  return env;
};

export default getEnvironment;
