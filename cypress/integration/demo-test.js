/// <reference types="cypress" />

it('google search example', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Lord of the Rings{enter}')
})