describe('/create/observation', () => {
  beforeEach(() => {
    cy.kcLogout()
    cy.kcLogin('user')
    cy.visit('/')
  })

  it('navigates to xx on successful submission', () => {
    setTimeout(function () {
      console.log('Hello')
    }, 9000)

    cy.contains('a', 'InvasivesBC')
    // cy.contains('input', 'Latitude').click()
    // cy.get('.error-messages').should('contain', "xxx can't be blank")
  })

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
})
