describe ('Log In', () => {
 beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit("/")
    cy.get('.baTaVsaG4').should('be.visible').and('exist').click()
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
         return false
    })

    it ('test1-verify log_in', () => {

        cy.log('**verify the logo**')
        cy.get('.Image > img').should('be.visible').and('exist')

        cy.get('.baTaHaKl4 > .Input').should('be.visible').and('exist').type('kendrickcavas@gmail.com')
        cy.get('.baTaHaNaZ4 > .clickable-element').click()
        cy.get('#passwording').should('be.visible').and('exist').type('Admin@123')
        cy.get('.Button').should('be.visible').and('exist').click()
        .wait(3000)

    })

    it ('test2-verify reset_password', () => {

        cy.get('.baTaNaZv').should('be.visible').and('exist').click()
        cy.get('.baTaNaaV').should('be.visible').and('exist').type('kendrickcavas@gmail.com')
        cy.get('.baTaNaaH').should('be.visible').and('exist').click()

    })
    

})