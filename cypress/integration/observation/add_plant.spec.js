describe('/add', () => {
  const baseUrl = new URL(Cypress.config('baseUrl'));
  const cookieDomain = baseUrl.hostname;
  const cookieOptions = { log: false, domain: cookieDomain };
  before(() => {
    cy.svcClientLogout();
    cy.svcClientLogin().as('tokens');

    cy.get('@tokens').then((tokens) => {
      let tokenExpiryPOSIX = Date.now() + tokens.expires_in * 1000;
      let expiryDate = new Date(tokenExpiryPOSIX);
      let cookieExpiryUTC = expiryDate.toUTCString();
      cy.setCookie('accessToken', tokens.access_token, cookieOptions);
      cy.setCookie('accessTokenExpiery', cookieExpiryUTC, cookieOptions);

      tokenExpiryPOSIX = Date.now() + tokens.refresh_expires_in * 1000;
      expiryDate = new Date(tokenExpiryPOSIX);
      cookieExpiryUTC = expiryDate.toUTCString();
      cy.setCookie('refreshToken', tokens.refresh_token, cookieOptions);
      cy.setCookie('refreshTokenExpiery', cookieExpiryUTC, cookieOptions);
      // cy.visit({
      //   url: '/',
      // });
      // cy.location('pathname').should('eq', '/profile');
    });
  });

  it('navigates to xx on successful submission', () => {
    cy.visit({
      url: '/add',
    });

    // cy.contains('a', 'InvasivesBC');
    cy.contains('button', 'Invasive Plant Observation').click();
    cy.get('[placeholder=Latitude]').type('123{enter}');
    // cy.get('.mat-error').should('contain', 'Must be between 48 and 61');
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
