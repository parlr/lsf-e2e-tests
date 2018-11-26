describe('Load application', function() {
  it('display placeholder', function() {
    cy.visit('/');

    cy.get('data-e2e="placeholder"').should('be.visible');
  });
});
