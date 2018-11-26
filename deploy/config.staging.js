const config = require('./config.js');

module.exports = {
  COMMIT_SHA: config.commitSha,
  BRANCH: config.branch,
  PUBLIC_URL: `${config.staging.cloudfrontUrl}/${config.s3Folder}/${config.commitSha}`, // used by `react-scripts build` for asset urls
  DEPLOY_TO: `s3://${config.staging.s3Bucket}/${config.s3Folder}/${config.commitSha}`,
  DEPLOY_VERSION_FILE_TO: `s3://${config.staging.s3Bucket}/${config.s3Folder}/versions/${config.branch}.txt`
};
