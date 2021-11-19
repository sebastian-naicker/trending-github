/// <reference types="cypress" />

describe('Trending Developers', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/developers')
  })

  it('displays most popular developers', () => {
    cy.get('[data-testid=developers-page]').should('have.length', 1)
    cy.get('[data-testid=table-list] > li').should('have.length', 2)
  })
})
