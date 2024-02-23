describe('Supplier Offer RFQ (Product)', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit("https://getmeddevices.com/version-test/")
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('test1-verify supplier_offer', () => {

        cy.get('.baTaVsaG4').should('be.visible').and('exist').click()
        cy.get('.Image > img').should('be.visible').and('exist')

        cy.get('.baTaHaKl4 > .Input').should('be.visible').and('exist').type('kendrickcavas+1@gmail.com')
        cy.get('#passwording').should('be.visible').and('exist').type('Admin@123')
        cy.get('.Button').should('be.visible').and('exist').click()

        cy.get('.baTsaUv5').should('be.visible').and('exist').click()
        cy.get('.entry-1 > .baUaDaZaY1 > .clickable-element').should('be.visible').and('exist').click()
        cy.get('.group-item > .clickable-element').should('be.visible').and('exist').click()

        cy.get('.baTaNok1 > .Input').should('be.visible').and('exist').type('100')
        cy.get('.baTsaQaO > .Dropdown').should('be.visible').and('exist').select('5-7 days')
        cy.get('.baTaLbf3 > .Dropdown').should('be.visible').and('exist').select('15 Days')
        cy.get('.MultiLineInput').should('be.visible').and('exist').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet libero mi, ac vulputate velit cursus sed. Pellentesque sed suscipit leo. Nullam feugiat varius elit id luctus. Nam ac dui vitae massa sollicitudin maximus. Nulla vulputate leo ut mi imperdiet congue. Suspendisse ipsum libero, euismod ac laoreet ut, iaculis sit amet lorem. Phasellus vitae fermentum enim, et semper enim. Aliquam id est a mauris bibendum placerat sed eu augue.')
        cy.get('.baTaNqaZ1 > .multifileupload-MultiFileInput > .dropzone > .dz-default').should('be.visible').and('exist').attachFile('rizal6.jpg', { subjectType: 'drag-n-drop' })
        cy.get('.baTaNqi1 > .multifileupload-MultiFileInput > .dropzone > .dz-default').should('be.visible').and('exist').attachFile('document.pdf', { subjectType: 'drag-n-drop' })
        .wait(3000)
        cy.get('.baTaLaQh2').should('be.visible').and('exist').click()
        cy.get('.baTaQtaW').should('be.visible').and('exist').click()
        .and('have.text', 'Track Offer')

        
})

})