var config = require('./config.js');
var commitSha = process.env.CIRCLE_SHA1;
var branch = process.env.CIRCLE_BRANCH;

if (!commitSha) { throw new Error(`You must provide the branch's latest git commit sha, to deploy to staging.`); }
if (!branch) { throw new Error('You must provide the branch name, to deploy to staging.'); }

module.exports = {
  PUBLIC_URL: `${config.cloudfrontUrl}/${config.appKey}/${commitSha}`, // used by `react-scripts build` for asset urls
  DEPLOY_TO: `s3://${config.staging.s3Bucket}/${config.appKey}/${commitSha}`,
  DEPLOY_VERSION_FILE_TO: `s3://${config.staging.s3Bucket}/${config.appKey}/versions/${branch}.txt`
  COMMIT_SHA: commitSha,
  BRANCH: branch
}
