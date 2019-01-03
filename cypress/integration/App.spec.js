describe('My App', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });
  it('renders the main page with no accessibility errors', () => {
    cy.get('#root').should('exist');

    // Use cypress-axe to check accessibility. Results appear in the console.
    cy.checkA11y();

    // Uncomment this if you are using Percy
    // cy.percySnapshot();
  });
});
