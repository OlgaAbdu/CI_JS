/// <reference types = "cypress" />

describe('fail not fail', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/')
    })
  
    it('clicking"type" navigates to new url', () => {
      cy.contains('next').click()
      cy.url().should('include', '/commands/traversal')
    })
  
    it('clicking "root" navigates to new url', () => {
      cy.contains('root').click()
    })
  })
  