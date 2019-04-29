const { OFF, WARN, ERROR } = require('@pagerduty/eslint-plugin-pagerduty/lib/levels');

module.exports = {
  root: true,
  plugins: [
    '@pagerduty/pagerduty',
  ],
  extends: [
    'plugin:@pagerduty/pagerduty/javascript',
    'plugin:@pagerduty/pagerduty/react',
    'plugin:@pagerduty/pagerduty/jest',
    'plugin:@pagerduty/pagerduty/cypress'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'react/prop-types': OFF
  },
  overrides: [
    {
      files: ['src/scripts/**', 'jest.config.js'],
      env: {
        node: true
      }
    },
    {
      files: ['**.test.**', '**.spec.**'],
      env: {
        node: true,
        jest: true
      }
    }
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  }
};
