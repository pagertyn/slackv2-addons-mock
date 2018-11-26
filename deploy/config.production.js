const config = require('./config.js');

module.exports = {
  COMMIT_SHA: config.commitSha,
  BRANCH: config.branch,
  PUBLIC_URL: `${config.production.cloudfrontUrl}/${config.s3Folder}/`, // used by `react-scripts build` for asset urls
  DEPLOY_TO: `s3://${config.production.s3Bucket}/${config.s3Folder}`,
  DEPLOY_VERSION_FILE_TO: `s3://${config.production.s3Bucket}/${config.s3Folder}/versions/master.txt`
};
