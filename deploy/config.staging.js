const config = require('./config.js');

module.exports = {
  COMMIT_SHA: config.commitSha,
  BRANCH: config.branch,
  PUBLIC_URL: `${config.cloudfrontUrl}/${config.appKey}/${config.commitSha}`, // used by `react-scripts build` for asset urls
  DEPLOY_TO: `s3://${config.staging.s3Bucket}/${config.appKey}/${config.commitSha}`,
  DEPLOY_VERSION_FILE_TO: `s3://${config.staging.s3Bucket}/${config.appKey}/versions/${config.branch}.txt`
};
