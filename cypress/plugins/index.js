// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// module.exports = (on, config) => {
// `on` is used to hook into various events Cypress emits
// `config` is the resolved Cypress config
// }

/* eslint-disable no-console */

const chalk = require('chalk'); // eslint-disable-line import/no-extraneous-dependencies

chalk.enabled = true;
chalk.level = 3;

module.exports = (on) => {
  // bind to the event we care about
  on('task', {
    log(arg) {
      console.log(`${arg}`);
      return null;
    },
    'axe:log-violations': function logAxeViolations(violations) {
      const indent = (numberOfIndents = 1) => (new Array(numberOfIndents + 1)).join('  ');
      const br = (numberOfLinebreaks = 1) => (new Array(numberOfLinebreaks + 1)).join('\n\r');

      console.log(`${br()}${indent()}${chalk.bold('Accessibility Violations:')}${br()}`);

      violations.forEach((violation) => {
        const { nodes, id: violationId } = violation;

        nodes.forEach((node) => {
          const {
            impact, html, target, failureSummary
          } = node;

          console.log(`${indent(2)}Id: ${chalk.red(violationId)}`);
          console.log(`${indent(2)}Impact: ${chalk.red(impact)}`);
          console.log(`${indent(2)}Element: ${chalk.red(html)}`);
          console.log(`${indent(2)}Selector: ${chalk.red(target)}`);
          console.log(`${indent(2)}Summary: ${chalk.red(failureSummary)}`);
          console.log(br());
        });
      });

      return null;
    }
  });
};
