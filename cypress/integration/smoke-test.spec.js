const BASE_URL = "https://dev-invasivesbc.pathfinder.gov.bc.ca/add";
describe("The application loads", () => {
  it("navigates to the / route", () => {
    cy.visit(BASE_URL);
  });

  it("has the basic Todo list container", () => {
    cy.visit(BASE_URL);
    cy.get(".todo-list").should("exist");
  });
});
