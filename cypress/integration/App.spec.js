describe('My App', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('renders the page', () => {
    cy.get('#root').should('exist');

    // Uncomment this if you are using Percy
    // cy.percySnapshot();
  });
});
