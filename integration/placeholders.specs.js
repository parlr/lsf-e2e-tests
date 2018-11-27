describe('Load application', function() {
  it('display placeholder', function() {
    cy.server({ delay: 500 });

    cy.visit('/');

    cy.get('[data-e2e="static-wordlist-placeholder"]').should('be.visible');
  });
});
