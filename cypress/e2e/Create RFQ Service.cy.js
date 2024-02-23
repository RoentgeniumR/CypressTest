describe ('Create RFQ Service', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit("https://getmeddevices.com/version-test/")
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it ('test1-verify create-rfq-service', () => {

        cy.get('.baTaVsaG4').should('be.visible').and('exist').click()
        cy.get('.Image > img').should('be.visible').and('exist')

        cy.get('.baTaHaKl4 > .Input').should('be.visible').and('exist').type('kendrickcavas@gmail.com')
        cy.get('#passwording').should('be.visible').and('exist').type('Admin@123')
        cy.get('.Button').should('be.visible').and('exist').click()

        cy.get('.baTsaUu5').should('be.visible').and('exist').click()
        .and('have.text', 'Request for Quotation')
        cy.get('.baTaHaZz').should('be.visible').and('exist').click()

        cy.get('.baTaXjq2').should('be.visible').and('exist').click()
        cy.get('.baTmzaO1 > .Input').should('be.visible').and('exist').type('SE-1200 ECG Machine')
        cy.get('.baTmyp1 > .Input').should('be.visible').and('exist').type('IBM')
        cy.get('.baTnaBaM1 > .Input').should('be.visible').and('exist').type('D6901')
        cy.get('.baTpaYx4 > .Input').should('be.visible').and('exist').type('B89RT80H98H')
        cy.get('.baTpaYk4 > .Input').should('be.visible').and('exist').type('ROG Strix')
        //cy.xpath('//*[@id="P543110827"]').select('9/25/2023')
        cy.get('.baTjiaI0 > .Dropdown').should('be.visible').and('exist').select('100% Upon Completion')
        cy.get('.baTpaZs4 > .Input').should('be.visible').and('exist').type('2')
        cy.get('.baTkaQaQ5').should('be.visible').and('exist').click()
        .wait(3000)
        cy.get('.baTaIaCaW2').should('be.visible').and('exist').click()
        cy.get('.baTaJaPg0 > .Checkbox').should('be.visible').and('exist').click()
        .wait(3000)
        cy.get('.baTaMaUi1').should('be.visible').and('exist').click()


    })
    
})