# Build and Deploy Configuration

Certain environment variables need to be set during a build to get correct output for staging and production, and also to deploy it to the right place. In `package.json`, the deploy scripts use a tool called `env-cmd` that turns Javascript objects into environment variables. This folder contains configuration, written as javascript objects, to be used in `package.json` with `env-cmd`.

## What is the PUBLIC_URL variable?

The build comes from Create React App's `react-scripts`. Their command needs a PUBLIC_URL environment variable set, so links and assets have the right urls on staging and production. If we don't set it, urls will be relative to pagerduty.com, rather than going to s3.

## Testing

To test these configurations, you will always need to provide some environment variables. You can copy and paste these commands into your terminal to make things easier.

You can test using `node` by logging the config:
```CIRCLE_SHA1=abc CIRCLE_BRANCH=br node -e "console.log(require('./deploy/staging.js'))"```

You can test using `env-cmd` just like `package.json` does. Then `printenv` can show you an environment variable.
```CIRCLE_SHA1=abc CIRCLE_BRANCH=br npx env-cmd deploy/staging.js printenv PUBLIC_URL```
