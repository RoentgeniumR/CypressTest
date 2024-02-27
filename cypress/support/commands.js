/// <reference types="Cypress" />

// VISIT WEBPAGE
Cypress.Commands.add('init', () => {
    cy.viewport(1920, 1080)
    cy.visit("https://getmeddevices.com/version-test/")
    cy.wait(2000)
})
/// <reference types="cypress-xpath" />
/// <reference types="cypress-file-upload" />
