describe('Load application', function() {
  it('displays placeholder before data are available', function() {
    cy.server({ delay: 200 })
    cy.route('**/vocabulaire.json', 'fixture:vocabulaire.json')

    cy.visit('/')

    cy.get('[data-e2e="wordlist-placeholder-js"]').should('be.visible')
  })
})
