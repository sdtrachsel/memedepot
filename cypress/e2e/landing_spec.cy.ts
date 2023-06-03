describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', "https://api.api-ninjas.com/v1/dadjokes?limit=3", {
      statusCode: 200,
      fixture: 'jokes.json'
    })
  })

  it('it should display logo', () => {
    cy.get('.logo').should('be.visible').and('have.attr', 'src').and('include', 'meme_depot_logo.5a433c14dea18bd747d9.png')
  })

  it.skip('should dislay Home and Saved Meme nav links', () => {
    cy.get('.nav-link')
      .should('contain', 'Home')
      .should('contain', 'Saved Memes')
  })

  it('should have 19 images upon landing', () => {
    cy.get('.button-image').should('have.length', 19)
  })

  it('first picture should be a specific image', () => {
    cy.get('.button-image').first().and('have.attr', 'src').and('include', 'https://i.imgur.com/6AgsAtM.png')
  })

    //==> make a test to check the last image is correct as well
   
  it('should open meme generator', () => {
    cy.get('.button-image').first().click().get('.generator-container')
  })
  // ==> change this once Route URL as been assigned to the meme generator page.

  
	


})