
describe ('Sign Up', () => {
   beforeEach(() => {
      cy.viewport(1920, 1080)
      cy.visit("https://getmeddevices.com/version-test/")
   })
 
     Cypress.on('uncaught:exception', (err, runnable) => {
        return false
     })

     it ('test1-verify sign_up', () => {

      const serverId = Cypress.env('MAILOSAUR_SERVER_ID')
      const randomEmail = `${Cypress._.random(0, 999999)}@wdm9tk5f.mailosaur.net`
      
        cy.get('.baTaVsaI4').should('be.visible').and('exist').click()
        cy.get('.baTaHaQz').should('be.visible').and('exist').click()

        cy.get('.baTaHaEaO3 > .Input').should('be.visible').and('exist').type('Autom8')
        cy.get('.baTaHaEaJ3 > .Input').should('be.visible').and('exist').type('Autom8')

        cy.get('.baTaHaEaT3 > .Input').should('be.visible').and('exist').type(randomEmail)


    
    const numberOfPhoneNumbers = 5;

    for (let i = 0; i < numberOfPhoneNumbers; i++) {  
      const randomNumber = Math.floor(Math.random() * 1000000000) + 900000000;
      const phoneNumber = `9${randomNumber.toString()}`;

        cy.get('.baTaMhx > .Group > .Input').should('be.visible').and('exist').type(phoneNumber)
    }
     
    cy.get('#passwording').should('be.visible').and('exist').type('adminadm')
    .wait(3000)
    .clear()
    .type('admin1')
    .wait(3000)
    .clear()
    .type('Admin')
    .wait(3000)
    .clear()
    .type('admin@') 
    cy.get('.baTaWxaD2 > .ionic-IonicIcon').should('be.visible').and('exist').click()
    cy.get('#passwording2').should('be.visible').and('exist').type('Admin@123', {force: true})
    cy.get('.baTaHaEd3 > .ionic-IonicIcon').should('be.visible').and('exist').click({force: true})
    cy.get('.Button').should('be.visible').and('exist').click()
    .wait(3000)

    // mailosaur API connection GET message
    cy.mailosaurGetMessage(serverId, {
      sentTo: randomEmail,
      
      timeout: 15000,

    }).its('html.body')
    .then((html) => {
      cy.document({ log: false }).invoke({ log: false }, 'write', html)
    })

    cy.wait(3000)
    cy.log('**email has the user name**')
    cy.contains(`Hi, Autom8!`).should('be.visible')
    cy.log('**email has the confirmation code**')
    cy.get('[data-muid="659ff3b6-30eb-4638-a1e6-e7ab8fc734bc"] > tbody > tr > td > :nth-child(1) > [style="font-family: inherit; text-align: inherit"] > span')
    .should('be.visible').should('exist')

    cy.get('[data-muid="659ff3b6-30eb-4638-a1e6-e7ab8fc734bc.1"] > tbody > tr > td > :nth-child(1) > h1')
    .should('be.visible')
    .as('code')
    .invoke('text')
    .then((text) => Cypress._.last(text.split(' ')))
    .then((code) => {
    cy.log(`**confirm the code ${code} works**`)
    cy.get('@code')
    .should('have.length', 1)

    cy.go('back')
    .wait(5000)
  
    cy.get('.baTaLwaK1 > .bubble-element').type(code)
    cy.get('.baTaLje0 > .Button').click()

    cy.log('test1 Successful')
    cy.wait(5000)

   })

   cy.get('.baTaOaXd1 > .bubble-element > input').attachFile('rizal3.jpg').and('exist')
   cy.get('.baTaOaYaT1 > .bubble-element > input').attachFile('rizal6.jpg').and('exist')
   cy.get('.baTaOaMy1').should('be.visible').and('exist')
   .wait(3000)
   cy.get('.baTaOaMw1 > .Button').should('be.visible').click()

   cy.get('.baTaOaYaY1').and('exist').type('AUTOM8 INNOVATIONS')

   const phonenum = 5;

    for (let i = 0; i < phonenum; i++) {
      const randomNumber = Math.floor(Math.random() * 1000000000) + 900000000;
      const phoneNumber = `9${randomNumber.toString()}`;
   cy.get('.baTaWaCu4 > .Input').should('be.visible').and('exist').type(phoneNumber)
}

   cy.wait(3000)
   cy.xpath('/html/body/div[3]/div[2]/div[3]/div/select[1]').select('NCR')
   cy.xpath('/html/body/div[3]/div[2]/div[3]/div/select[2]').select('Metro Manila')
   cy.xpath('/html/body/div[3]/div[2]/div[3]/div/select[3]').select('Muntinlupa')

   cy.get('.baTaOaZaO1 > .Group > .Input').should('be.visible').and('exist').type('4567')
   cy.get('.MultiLineInput').should('be.visible').and('exist').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dui at magna sodales efficitur quis at mi. Mauris nec tellus sit amet elit hendrerit accumsan nec eget augue.')
   cy.get('.baTaOvaH > .Checkbox').should('be.visible').and('exist').click()
   cy.get('.baTaOvaT > .Checkbox').should('be.visible').and('exist').click()
   .wait(2000)

   cy.get('.baTaOvaZ > div').should('be.visible').and('exist').click()
   .wait(5000)
   cy.get('.greyout').first().click({force: true})
   cy.get('.baTaOvw > div').should('be.visible').and('exist').click()
   .wait(5000)
   cy.get('.greyout').last().click({force: true})

   cy.get('.baTaOaOaP1 > .Button').should('be.visible').and('exist').click()

  })

})

