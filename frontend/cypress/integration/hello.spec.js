describe("Homepage", () => {
  it("succesfully loads", () => {
    cy.visit("/");
    cy.contains("Dashboard");
  });
});
