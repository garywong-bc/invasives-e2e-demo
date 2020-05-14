describe('/add', () => {
  let base64_token;

  beforeEach(() => {
    cy.kcLogout();
    cy.kcLogin().as('tokens');
    // this should resolve to https://dev-invasivesbc.pathfinder.gov.bc.ca/profile
    cy.get('@tokens').then((tokens) => {
      base64_token = btoa(tokens.id_token);
      cy.visit('/', {
        headers: {
          Authorization: `Bearer ${base64_token}`,
        },
      });
    });
  });

  it('navigates to xx on successful submission', () => {
    cy.visit('/add', {
      headers: {
        Authorization: `Bearer ${base64_token}`,
      },
    });

    cy.contains('a', 'InvasivesBC');
    // cy.contains('input', 'Latitude').click()
    // cy.get('.error-messages').should('contain', "xxx can't be blank")
  });

  // it('requires location', () => {
  //   cy.get('form').contains('Submit Observation').click()
  //   cy.get('.error-messages').should('contain', "xxx can't be blank")
  // })

  // it('requires geometry', () => {})

  // it('requires date', () => {})

  // it('requires valid latitude', () => {
  //   cy.get('[data-test=lat]').type('invalid{enter}')
  //   cy.get('error-messages').should('contain', 'latitude is invalid')
  // })

  // it('navigates to xx on successful submission', () => {})
});
