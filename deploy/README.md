# Build and Deploy

This folder contains a deploy script called `deploy.sh`. It is meant to be run from the skeleton's `package.json` file. It depends on a number of environment variables, and is normally run by CI. The script builds the app, copies the output to s3, and updates a file on s3 to "activate" the version.

## Configuration

During the build and deploy steps, certain environment variables need to be set to get correct output for staging and production, and to deploy things to the right place. In the skeleton's `package.json`, the deploy scripts use a tool called `env-cmd` that turns Javascript objects into environment variables. This folder contains configuration, written as javascript objects, to be used with `env-cmd`.

### What is the PUBLIC_URL variable?

The build comes from Create React App's `react-scripts`. Their command needs a PUBLIC_URL environment variable set, so links and assets have the right urls on staging and production. If we don't set it, urls will be relative to pagerduty.com, rather than going to s3.

## Testing

To test the configurations, you will always need to provide some environment variables. You can copy and paste these commands into your terminal to make things easier.

**If you're at the root of the skeleton app...**

You can test using `node` by logging the config:

```
CIRCLE_SHA1=abc CIRCLE_BRANCH=br node -e "console.log(require('./deploy/staging.config.js'))"
```

You can test using `env-cmd` just like `package.json` does. Then `printenv` can show you an environment variable.

```
CIRCLE_SHA1=abc CIRCLE_BRANCH=br npx env-cmd deploy/staging.config.js printenv PUBLIC_URL
```
