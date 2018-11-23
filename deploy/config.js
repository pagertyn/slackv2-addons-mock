if (!process.env.npm_package_config_appkey) {
  throw new Error('You must provide the environment variable npm_package_config_appkey containing the app key for this app.');
}
if (!process.env.CIRCLE_SHA1) {
  throw new Error('You must provide the environment variable CIRCLE_SHA1 containing the latest git sha you are deploying.');
}
if (!process.env.CIRCLE_BRANCH) {
  throw new Error('You must provide the environment variable CIRCLE_BRANCH containing the git branch you are deploying.');
}

const appKey = process.env.npm_package_config_appkey; // comes from package.json
const commitSha = process.env.CIRCLE_SHA1;
const branch = process.env.CIRCLE_BRANCH;

module.exports = {
  appKey,
  cloudfrontUrl: 'https://d30g1epxm0pa0g.cloudfront.net',
  staging: {
    s3Bucket: 'pd-frontendcore-stg'
  },
  production: {
    s3Bucket: 'pd-frontendcore-stg'
  },
  commitSha,
  branch
};
