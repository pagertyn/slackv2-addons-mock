const config = require('./config.js');
const baseConfig = require('./deploy.js');

module.exports = {
  ...baseConfig,
  PUBLIC_URL: `${config.cloudfrontUrl}/${config.appKey}/`, // used by `react-scripts build` for asset urls
  DEPLOY_TO: `s3://${config.production.s3Bucket}/${config.appKey}`,
  DEPLOY_VERSION_FILE_TO: `s3://${config.production.s3Bucket}/${config.appKey}/versions/${baseConfig.branch}`
};
