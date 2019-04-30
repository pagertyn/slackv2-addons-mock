describe('main page', () => {
  it('renders with no accessibility errors', () => {
    cy.visit('/');
    cy.get('#root').should('exist');
    cy.get('.pdx-loading').should('not.exist');
    cy.injectAxe();
    cy.checkA11y();
  });
});
