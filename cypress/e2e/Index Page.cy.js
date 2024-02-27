// Run: npx cypress run --spec cypress\e2e\Autom8.cy.js

describe('Marketing Page', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('test1-verify title', () => {
    cy.init()
    cy.title().should('eq', 'Get Medical Devices by InterLeukin')
    // visits get-med-devices

    cy.url().should('include', 'getmeddevices.com')
    .and('eq', 'https://getmeddevices.com/version-test/')
    .and('contain', 'version-test')
    .wait(5000)
  })

  it('test2-verify header', () => {
    cy.viewport(1920, 1080)
    cy.visit("https://getmeddevices.com/version-test/")
    cy.get('img[src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fc069852b81372057f0c48face4136925.cdn.bubble.io%2Ff1698282646317x343048845885952830%2FLogo-L.png?w=384&h=61&auto=compress&dpr=1&fit=max"]')
    .should('be.visible')
    .and('exist')
    .wait(5000)
    cy.get('.baTaWaCk4').should('be.visible').click() //checks home nav button
    .and('exist')
    cy.get('.baTddaM').should('be.visible').click() //checks join us nav button
    .and('exist')
    cy.get('.baTddaY').should('be.visible').click() //checks book a demo nav button
    .and('exist')
    cy.get('.baTddaS').should('be.visible').click() //checks our solution nav button
    .and('exist')

    cy.get('.baTaVsaI4').should('be.visible').click() //checks sign up button
    .and('exist')
    .get('.clickable-element > img').click()
    .wait(3000)
    cy.get('.baTaVsaG4').should('be.visible').click() //checks log in button
    .and('exist')

  })
  
  it('test3-verify body', () => {

    cy.viewport(1920, 1080)
    cy.visit("https://getmeddevices.com/version-test/")
    cy.get('.baTgaQaE4').should('be.visible')
    .and('contain', 'Medical Sourcing       made simple')
    .and('exist')
    cy.get('.baTgaQaI4').should('be.visible')
    .and('contain', "Better than Google search. Find and source the medical products and services you can't find elsewhere.")
    .and('exist')
    cy.get('.baTgaPs4 > .Text').should('be.visible')
    .and('contain', 'Ask for quotation')
    .and('exist')
    cy.get('.baTgaQaJ4 > .bubble-element > img').should('be.visible') //checks image1
    .and('exist')
    cy.get('.baTgaPl4').should('be.visible')
    .and('contain', 'Our Solution')
    .and('exist')
    cy.get('.baTgaHz4 > .Image > img').should('be.visible') //checks image2
    .and('exist')
    cy.get('.baTgaIaF4').should('be.visible')
    .and('contain', 'For Buyers')
    .and('exist')
    cy.get('.baTgaIaG4').should('be.visible')
    .and('contain', 'Your all-in-one platform for your procurement needs.')
    .and('exist')
    .get('.baTgaIaL4 > .Text').should('be.visible')
    .and('contain', 'Easily request for multiple quotes from different suppliers')
    .get('.baTgaIaX4 > .Text').should('be.visible')
    .and('contain', 'Choose from thousands of medical brands from anywhere')
    .get('.baTgaIaR4 > .Text').should('be.visible')
    .and('contain', 'Hassle-free managing of Purchase Orders')
    .get('.baTgaId4 > .Text').should('be.visible')
    .and('contain', 'Buy from hundreds of Suppliers with better prices')
    .get('.baTgaIj4 > .Text').should('be.visible')
    .and('contain','Buy from hundreds of Suppliers with multiple payment options and terms')
    .and('exist')

    cy.get('.baTgaJk4').should('be.visible')
    .and('contain', 'For Suppliers')
    .and('exist')
    cy.get('.baTgaJe4 > .Image > img').should('be.visible') //checks image3
    .and('exist')
    cy.get('.baTgaJl4').should('be.visible')
    .and('contain', 'Promote, bid, manage orders and logistics, and get paid fast within one platform.')
    .and('exist')
    cy.get('.baTgaJq4 > .Text').should('be.visible')
    .and('contain', 'Participate in RFQs from thousands of medical institutions and purchasers online.')
    cy.get('.baTgaKaC4 > .Text').should('be.visible')
    .and('contain', 'Manage all your quotes from Verified Buyer institutions.')
    cy.get('.baTgaJw4 > .Text').should('be.visible')
    .and('contain', 'Cost-saving promotion of products to buyers directly.')
    cy.get('.baTgaKaI4 > .Text').should('be.visible')
    .and('contain', 'Custom an exclusive product catalog online.')
    cy.get('.baTgaKaO4 > .Text').should('be.visible')
    .and('contain', 'Get Paid Fast. Forget frequent follow-ups.')

    cy.get('.baTgaIq4').should('be.visible') //checks blue bg image
    .and('exist')
    cy.get('.baTgaJa4').should('be.visible')
    .and('contain', '3 Easy Ways to Find Suppliers and Get Quotes')

    cy.get('.baTgaIw4')
    .find('.baTgaJaA4').should('be.visible').and('exist')
    .get('.baTgaJaB4').should('be.visible')
    .and('contain', 'Post your needs')
    .get('.baTgaJaC4').should('be.visible')
    .and('contain', 'Submit the medical products you need. Our team keeps on updating different categories and supplier listing and assist you with strategic sourcing opportunities.')
    cy.get('.baTgaIw4 > .clickable-element').should('be.visible').click()
    .wait(3000) 
    .get('.greyout').click({force: true})

    cy.get('.baTgaJaH4')
    .find('.baTgaJaO4').should('be.visible').and('exist')
    .get('.baTgaJaI4').should('be.visible')
    .and('contain', 'Bid and buy in an instant')
    .get('.baTgaJaM4').should('be.visible')
    .and('contain', 'Save time and increase productivity on negotiation to RFQs and get Purchase Orders directly to different medical institution buyers.')
    cy.get('.baTgaJaH4 > .clickable-element').should('be.visible').click()
    .wait(3000)
    .get('.greyout').click({force: true})

    cy.get('.baTgaJaS4')
    .find('.baTgaJaZ4').should('be.visible').and('exist')
    .get('.baTgaJaT4').should('be.visible')
    .and('contain', 'Register as buyer')
    .get('.baTgaJaU4').should('be.visible')
    .and('contain', 'Registered Buyers can discover and get quote with multiple accredited suppliers and brands, send your POs and pay on terms within one platform.')
    cy.get('.baTgaJaS4 > .clickable-element').should('be.visible').click()
    .wait(3000)
    .get('.greyout').click({force: true})

    cy.get('.baTgaKaW4').should('be.visible')
    .and('contain', 'Find suppliers, discover new products, sourcing tools and more...')
    cy.get('.baTgaKa4').should('be.visible')
    .and('contain', "Become part of the Philippines' largest and most active network of B2B medical buyers and distributors/suppliers")

    cy.get('.baTgaLaM4')
    .find('.baTgaLaW4').should('be.visible').and('exist')
    cy.get('.baTgaLaR4').and('contain', '1M units')
    cy.get('.baTgaLaS4').and('contain', 'Products sold')

    cy.get('.baTgaLaE4')
    .find('.baTgaLaL4').should('be.visible').and('exist')
    cy.get('.baTgaLaG4').and('contain', '500+')
    cy.get('.baTgaLaK4').and('contain', 'B2B Users Participated')

    cy.get('.baTgaKi4')
    .find('.baTgaKs4').should('be.visible').and('exist')
    cy.get('.baTgaKn4').and('contain', '50,000+')
    cy.get('.baTgaKo4').and('contain', 'SKUs to Select')

    cy.get('.baTgaKt4')
    .find('.baTgaLaA4').should('be.visible').and('exist')
    cy.get('.baTgaKz4').and('contain', 'PHP 100,000+')
    cy.get('.baTgaKy4').and('contain', 'Average Transaction Amount')

    cy.get('.baTgaKc4').click()
    .wait(3000)
    .get('.greyout').click({force: true})
    cy.get('.baTgaKg4').click()
    .wait(3000)
    .get('.greyout').click({force: true})

    cy.get('.baTgaNaV4').should('be.visible')
    .and('exist')
    cy.get('.baTgaNaW4').should('be.visible').and('exist')
    .find('.baTgaNa4').should('be.visible').and('exist')
    .get('.baTgaNc4').and('contain', 'Supplier-Buyer Connection')
    .get('.baTgaNg4').and('contain', 'Watch these videos to learn more about Our Solution')
    cy.get('.baTgaNaW4 > .Group > .clickable-element').should('be.visible').click()

    cy.get('#slick-slide-control00').should('be.visible').click()
    .wait(3000)
    cy.get('#slick-slide-control01').should('be.visible').click()
    .wait(3000)
    cy.get('#slick-slide-control02').should('be.visible').click()

  })

  it('test4-verify footer', () => {

    cy.viewport(1920, 1080)
    cy.visit("https://getmeddevices.com/version-test/")

    cy.get('.baTgaNi4').should('be.visible').and('exist')
    cy.get('.baTgaPe4 > .Text > div').should('be.visible')
    .and('contain', 'Supplier?')
    cy.get('.baTgaPg4').should('be.visible').click()
    .wait(3000)
    .get('.greyout').click({force: true})

    cy.get('.baTgaNn4 > img').should('be.visible').and('exist')
    cy.get('.baTgaOi4 > img').should('be.visible').and('exist') 
    cy.get('.baTgaOk4 > .Image > img').should('be.visible').and('exist') //checks logo on footer

    cy.get('.baTgaPaZ4').should('be.visible').and('contain', 'Our Founders').click()
    .and('exist')
    .wait(5000)
    cy.get('.baTgaPa4').should('be.visible').and('contain', 'Our Story').click()
    .and('exist')

    cy.get('.baTgaOq4').should('be.visible').and('contain', 'Our Platform')
    cy.get('.baTgaOu4').should('be.visible').and('contain', 'Join')
    cy.get('.baTgaOv4 > div').should('be.visible').and('contain', 'Resources')

    cy.get('.baTgaPaG4').should('be.visible').and('contain', 'Our Solution').click()
    .wait(3000)
    cy.get('.baTgaPaC4').should('be.visible').and('contain', 'How it works').click()

    cy.get('.baTgaPaM4').should('be.visible').and('contain', 'Sellers').click()
    .get('.greyout').click({force: true})
    .wait(3000)
    cy.get('.baTgaPaI4').should('be.visible').and('contain', 'Buyers').click()
    .get('.greyout').click({force: true})

    cy.get('.baTgaPaO4').should('be.visible').and('contain', 'Articles').click()
    .wait(3000)
    cy.get('.baTgaPaS4').should('be.visible').and('contain', 'Help Center').click()
    .wait(3000)
    cy.get('.baTaWaCk4').click()
    .wait(3000)
    cy.get('.baTgaPaT4').should('be.visible').and('contain', 'Set a meeting').click()
    .wait(3000)

    cy.get('.baTgaOe4').should('be.visible').and('contain', 'Follow us')
    cy.get('.baTgaOaG4 > .Image > img').should('be.visible').and('exist').click()
    .wait(3000)
    cy.get('.baTgaOaM4 > .Image > img').should('be.visible').and('exist').click()
    .wait(3000)
    cy.get('.baTgaOaS4 > .Image > img').should('be.visible').and('exist').click()
    .wait(3000)
    cy.get('.baTgaOaY4 > .Image > img').should('be.visible').and('exist').click()
    .wait(3000)
    cy.get('.baTaPby').should('be.visible').and('contain', 'Privacy Policy').click()
    .and('exist')
    cy.get('.baTaWaCk4').click()
    .wait(3000)
    cy.get('.baTaPcaB > div').should('be.visible').and('contain', 'Terms and Conditions').click()
    .and('exist')
    cy.get('.baTaWaCk4').click()
    .wait(3000)
    cy.get('.baTgaNu4').should('be.visible').and('exist').type('fagulf00@gmail.com') //checks email input
    cy.get('.baTgaNt4 > .clickable-element').should('be.visible').click() //checks subscribe button

  })

})