# Build and Deploy Configuration

The files in this folder contain the configuration used in `package.json` when calling the deploy commands for staging and production. The configuration is written in javascript. `package.json` uses a tool called `env-cmd` that turns js objects into environment variables.

## What is the PUBLIC_URL variable?

The build come from Create React App's `react-scripts`. Their command needs a PUBLIC_URL environment variable set, so links and assets have the right urls on staging and production. If we don't set it, urls will be relative to pagerduty.com, rather than going to s3.

## Testing

To test these configurations, you will always need to provide some environment variables. You can copy and paste these commands into your terminal to make things easier.

You can test using `node` by logging the config:
`CIRCLE_SHA1=abc CIRCLE_BRANCH=br npm_package_config_appkey=someapp node -e "console.log(require('./deploy/config.staging.js'))"`

You can test using `env-cmd` just like `package.json` does. Then `printenv` can show you an environment variable.
`CIRCLE_SHA1=abc CIRCLE_BRANCH=br npm_package_config_appkey=someapp npx env-cmd deploy/config.staging.js printenv PUBLIC_URL`
