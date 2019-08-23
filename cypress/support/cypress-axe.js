// This file is an inline fork of cypress-axe
// https://github.com/avanslaars/cypress-axe/blob/master/index.js
//
// Cypress-axe runs axe, which runs a11y tests on a page. We want
// to test our components, but it reported errors in the docz
// wrapper. Axe.run() already takes a selector to scope the check.
// This fork surfaces the `selector` parameter through `checkA11y()`.
// This fork also adds detailed accessibility violation logs to the terminal
// in headless mode.

import axe from 'axe-core';

Cypress.Commands.add('injectAxe', () => {
  cy.window({ log: false }).then((window) => {
    window.eval(axe.source);
  });
});

Cypress.Commands.add('checkA11y', (selector) => {
  cy.window({ log: false })
    // use selector to `axe.run` on only certain elements
    .then((win) => {
      const scope = selector ? win.document.querySelectorAll(selector) : win.document;
      return win.axe.run(scope);
    })
    .then(({ violations }) => {
      if (violations.length) {
        cy.task('axe:log-violations', violations);

        cy.wrap(violations, { log: false }).each((violation) => {
          const message = `${violation.id} on ${violation.nodes.length} Node${
            violation.nodes.length === 1 ? '' : 's'
          }`;

          Cypress.log({
            name: 'a11y error!',
            consoleProps: () => violation,
            message,
          });
        });
      }

      return cy.wrap(violations, { log: false });
    })
    .then((violations) => {
      assert.equal(violations.length, 0, `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} ${violations.length === 1 ? 'was' : 'were'} detected.`);
    });
});
