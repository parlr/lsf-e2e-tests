describe('Dashboard', function() {
  it('<dashboard> is present', function() {
    cy.visit('/#dashboard')

    cy.contains('dashboard').should('be.visible')
  })

  it('Searching reduce results', function() {
    cy.server()
    cy.route('**/semantic-primes.json', 'fixture:semantic-primes.json')

    cy.visit('/')

    const SEARCH_RESULTS_COUNT = 2
    cy.get('[data-e2e=entries]')
      .children()
      .its('length')
      .should('be.above', SEARCH_RESULTS_COUNT)

    cy.get('[data-e2e="search-bar-input"]').type('na')

    cy.get('[data-e2e=search-bar-result-count]').should('have.text', '2')
    cy.get('[data-e2e=entries]')
      .children()
      .should('have.length', SEARCH_RESULTS_COUNT)
  })
})
