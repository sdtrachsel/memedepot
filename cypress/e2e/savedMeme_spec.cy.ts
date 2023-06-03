describe('form', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=3', {
      statusCode: 200,
      fixture: 'jokes.json'
    })
    .visit('http://localhost:3000/')
    .get('.button-image').first().click().get('.generator-container')
    .get('.joke-option-wrapper').first().click()
    .get('.form-button').contains('save meme').click()
    .get('.header-button').contains('Saved Memes').click()
    .get('.header-button').contains('Home').click()
    .get('.button-image').last().click()
    .get('.joke-option-wrapper').last().click()
    .get('.form-button').contains('save meme').click()
    .get('.header-button').contains('Saved Memes').click()
  });

  it('the user should see their first meme with text, image, and star to favorite', () => {
    cy.get('.meme')
    .contains('h4', "I'm worried for the calendar because its days are numbered")
    .get('.meme-image').should('have.attr', 'src').and('include', "https://i.imgur.com/6AgsAtM.png")
    .get('.fav-icon').should('have.attr', 'src')
  });

  it('the user should see a second meme with a certain image, text, and star', () => {
    cy.get('.meme-image').last().should('have.attr', 'src').and('include', 'https://i.imgur.com/JjzYBO5.png')
    .get('.meme').contains('h4', "How does a lawyer say goodbye? I'll be suing ya!")
    .get('.fav-icon').should('have.attr', 'src')
  })
  
  it('the user should see a favorites button', () => {
    cy.get('.view-fav-button')
    .contains("View Favorites")
  })

  it('there should be a home button', () => {
    cy.get('.header-button').contains('Home')
    .should('have.attr', 'href').and('include', "/")
  })

  it('there should be a saved memes button', () => {
    cy.get('.header-button').contains('Saved Memes')
    .should('have.attr', 'href').and('include', "/savedmemes")
  })

  it('there should be a logo in corner', () => {
    cy.get('.logo').should('have.attr', 'alt').and('include', 'Meme Depot Logo')
  })
})