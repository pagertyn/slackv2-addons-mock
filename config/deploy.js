const config = require('./config.js');

const commitSha = process.env.CIRCLE_SHA1;
const branch = process.env.CIRCLE_BRANCH;

if (!commitSha) { throw new Error('You must provide the environment variable CIRCLE_SHA1 containing the latest git sha you are deploying.'); }
if (!branch) { throw new Error('You must provide the environment variable CIRCLE_BRANCH containing the git branch you are deploying.'); }

module.exports = {
  COMMIT_SHA: commitSha,
  BRANCH: branch
};
