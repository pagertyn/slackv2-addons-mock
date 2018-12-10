import environmentVariables from '../scripts/environment-variables';

const environment = () => {
  const env = environmentVariables.NODE_ENV;
  if (env === 'development' && window.location.href.indexOf('branch=local') >= 0) {
    return 'branch-local';
  }
  return env;
};

export default environment;
