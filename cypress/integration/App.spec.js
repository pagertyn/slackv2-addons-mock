describe('My App', () => {
  it('renders the main page with no accessibility errors', () => {
    cy.visit('/');
    cy.get('#root').should('exist');
    cy.injectAxe();
    cy.checkA11y();
  });

  it('renders the error page with no accessibility errors', () => {
    cy.visit('/error');
    cy.get('#root').should('exist');
    cy.injectAxe();
    cy.checkA11y();
  });

  it('renders the not found page with no accessibility errors', () => {
    cy.visit('/not-found');
    cy.get('#root').should('exist');
    cy.injectAxe();
    cy.checkA11y();
  });
});
