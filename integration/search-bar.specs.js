describe('Search bar', function() {
  it('<search-bar> is present', function() {
    cy.visit('/')

    cy.get('[data-e2e=search-bar]').should('be.visible')
  })

  it('Search input is present', function() {
    cy.visit('/')

    cy.get('[data-e2e="search-bar-input"]').should('be.visible')
  })

  it('Results count is present', function() {
    cy.visit('/')

    cy.get('[data-e2e=search-bar-result-count]').should('be.visible')
  })

  it('Searching reduce results', function() {
    cy.server()
    cy.route('**/vocabulaire.json', 'fixture:vocabulaire.json')

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
