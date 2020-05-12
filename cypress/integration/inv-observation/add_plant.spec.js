describe('/create/observation', () => {

  beforeEach(() => {
    cy.loginIDIR()
    cy.visit('/create/observation')
  })


  it('greets with Add New Observation', () => {
    cy.contains('h1','Add New Observation')
  })
  

})
