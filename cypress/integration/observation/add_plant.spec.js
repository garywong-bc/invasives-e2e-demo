describe('/add', () => {
  beforeEach(() => {
    cy.svcClientLogout();
    cy.svcClientLogin().as('tokens');
    cy.get('@tokens').then((tokens) => {
      cy.svcClientSetCookie(tokens);
    });
  });

  it('navigates to xx on successful submission', () => {
    cy.visit({
      url: '/add',
    });

    cy.contains('button', 'Invasive Plant Observation').click();
    cy.get('[placeholder="Latitude"]').type('50.12345{enter}');
    cy.get('[placeholder="Longitude"]').type('-120.12345{enter}');

    cy.get('#geometryType').type('Point - Small area circle{enter}');

    cy.get('#mat-input-2').type('100{enter}');
    // since InvasivesBC auto-generates the form, it's better to select on Label rather than auto-generated
    // ID field (example above)
    cy.get('[placeholder="Length"]').type('100{enter}');
    cy.get('[aria-label="Open calendar"]').click();
    cy.get('.mat-calendar-previous-button').click();
    cy.get('.mat-calendar-body-cell').contains('1').click();

    cy.get('#mat-input-7').focus;
    cy.get('#mat-input-7')
      .type(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{enter}
    `);

    cy.get('#generalComment').type(
      `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{enter}`,
    );

    cy.get('[placeholder="Observer First Name"]').type('John{enter}');
    cy.get('[placeholder="Observer Last Name"]').type('Wile{enter}');

    cy.get('[aria-label="Species"]').type("Baby's breath{enter}");

    cy.get('#completedOnBehalfOf').type('Parks Canada{enter}');

    cy.get('[aria-label="Jurisdiction"]').type('BC Hydro{enter}');

    // cy.get('[placeholder=Longitude]').type('123{enter}');
    // cy.get('[placeholder=Longitude]').type('123{enter}');
    // cy.get('[placeholder=Longitude]').type('123{enter}');
    // cy.get('[placeholder=Longitude]').type('123{enter}');
    // cy.get('[placeholder=Longitude]').type('123{enter}');

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
