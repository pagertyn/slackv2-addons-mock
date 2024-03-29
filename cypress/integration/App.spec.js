describe('App', () => {
  it('renders the not found page with no accessibility errors', () => {
    cy.visit('/fdjskaldhjkafhjdksa');
    cy.get('#root').should('exist');
    cy.get('.pdx-loading').should('not.exist');
    cy.injectAxe();
    cy.checkA11y();
  });
});
