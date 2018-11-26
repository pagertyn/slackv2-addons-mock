errorMessage = (envVariable, shouldContain) => `
  The environment variable ${envVariable} is required, and should contain ${shouldContain}.
  Normally this is set by CI. If you are running this locally, see the Testing section of README.md.
`

if (!process.env.CIRCLE_SHA1) {
  throw new Error(errorMessage('CIRCLE_SHA1', 'the git sha you are deploying'));
}
if (!process.env.CIRCLE_BRANCH) {
  throw new Error(errorMessage('CIRCLE_BRANCH', 'the name of the git branch you are deploying'));
}

const commitSha = process.env.CIRCLE_SHA1;
const branch = process.env.CIRCLE_BRANCH;

module.exports = {
  staging: {
    cloudfrontUrl: 'https://d30g1epxm0pa0g.cloudfront.net',
    s3Bucket: 'pd-frontendcore-stg'
  },
  production: {
    cloudfrontUrl: 'https://d30g1epxm0pa0g.cloudfront.net',
    s3Bucket: 'pd-frontendcore-stg'
  },
  s3Folder: 'react-skeleton',
  commitSha,
  branch
};
