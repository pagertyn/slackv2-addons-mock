describe('My App', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });
  it('renders the main page with no accessibility errors', () => {
    cy.get('#root').should('exist');
    cy.checkA11y();
  });
});
