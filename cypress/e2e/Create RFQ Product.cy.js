describe ('Create RFQ Product', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit("/")
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it ('test1-verify create-rfq-product', () => {

        cy.get('.baTaVsaG4').should('be.visible').and('exist').click()
        cy.get('.Image > img').should('be.visible').and('exist')

        cy.get('.baTaHaKl4 > .Input').should('be.visible').and('exist').type('kendrickcavas@gmail.com')
        cy.get('#passwording').should('be.visible').and('exist').type('Admin@123')
        cy.get('.Button').should('be.visible').and('exist').click()

        cy.get('.baTsaUu5').should('be.visible').and('exist').click()
        .and('have.text', 'Request for Quotation')
        cy.get('.baTaHaZz').should('be.visible').and('exist').click()

        cy.get('.baTaXjr2').should('be.visible').and('exist').click()
        
        cy.get('.baTaNaHl0 > .clickable-element').should('be.visible').and('exist').click()
        cy.get('.baTaStaU2').and('exist').eq(3).click({ multiple: true })

        cy.get('.baTaSvz0').should('be.visible').and('exist').type('999')
        cy.get("[class='bubble-element Dropdown dropdown-chevron']").should('be.visible').and('exist').eq(0).select('box')
        cy.get('.baTaSvu0').should('be.visible').and('exist').type('999999')
        cy.get("[class='bubble-element Dropdown dropdown-chevron']").should('be.visible').and('exist').eq(1).select('Cash on Delivery')
        cy.xpath("/html[1]/body[1]/div[10]/div[7]/textarea[1]").should('be.visible').and('exist').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis mi ut lacus molestie pellentesque. Aenean faucibus volutpat magna, semper aliquet felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In semper ipsum vel fermentum tempor. Proin in sodales leo, ac ultrices arcu. Nulla facilisi. Mauris sagittis nunc justo, vel lobortis tortor lobortis vitae. Suspendisse sed purus vel nisi ornare tincidunt. Phasellus vestibulum at odio et posuere. Fusce ipsum elit, feugiat non tempor quis, scelerisque at lorem. Nam sollicitudin consequat turpis sed fermentum. Integer porta ultricies sapien et sodales. Aliquam arcu lacus, congue ac mauris vel, faucibus commodo tellus. Pellentesque dolor velit, mollis sit amet luctus vel, imperdiet vel libero. Fusce posuere porta odio eget efficitur. Maecenas vehicula porttitor eros ac luctus.')
        cy.get('.baTaSwaS0').should('be.visible').and('exist').click()
        cy.get('.greyout.baTaSaaD0').and('exist').click({force: true})
        cy.get('.baTaWaCb4 > .multifileupload-MultiFileInput > .dropzone > .dz-default').attachFile('rizal3.jpg', {subjectType: 'drag-n-drop'})
        cy.get('.baTaIfaW').should('be.visible').and('exist').click()
        cy.get('.baTaIaCaW2').should('be.visible').and('exist').click()

        cy.get('.baTaJaPg0 > .Checkbox').should('be.visible').and('exist').click()
        .wait(5000)
        cy.get('.baTaMaUi1').should('be.visible').and('exist').click()


    })
    
})