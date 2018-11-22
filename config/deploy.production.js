var config = require('./config.js');
var branch = process.env.CIRCLE_BRANCH;

if (!branch) { throw new Error('You must provide the branch name, to deploy to staging.'); }

module.exports = {
  PUBLIC_URL: `${config.cloudfrontUrl}/${config.appKey}/`, // used by `react-scripts build` for asset urls
  DEPLOY_TO: `s3://${config.production.s3Bucket}/${config.appKey}`,
  DEPLOY_VERSION_FILE_TO: `s3://${config.production.s3Bucket}/${config.appKey}/versions/${branch}`
}
