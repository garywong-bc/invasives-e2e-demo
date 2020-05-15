describe('/create/observation', () => {
  beforeEach(() => {
    cy.svcClientLogout();
    cy.svcClientLogin().as('tokens');
    cy.get('@tokens').then((tokens) => {
      cy.svcClientSetCookie(tokens);
    });
  });

  it('greets with Add New Observation', () => {
    cy.contains('h1', 'Add New Observation');
  });
});
