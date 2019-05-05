describe('Semantic-primes', function() {
  it('<semantic-primes> is present', function() {
    cy.server()
    cy.route('**/semantic-primes.json', 'fixture:semantic-primes.json')

    cy.visit('/#semantic-primes')

    const SEARCH_RESULTS_COUNT = 2
    cy.get('[data-e2e=entries]')
      .children()
      .its('length')
      .should('be.above', SEARCH_RESULTS_COUNT)
    cy.contains('longtemps').should('be.visible')
  })
})
