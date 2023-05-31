describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('it should display logo', () => {
    cy.get('.logo').should('be.visible').and('have.attr', 'src').and('include', 'meme_depot_logo.5a433c14dea18bd747d9.png')
  })

  it('should dislay Home and Saved Meme nav links', () => {
    cy.get('.nav-link')
      .should('contain', 'Home')
      .should('contain', 'Saved Memes')
  })

  it('should have 19 images upon landing', () => {
    cy.get('.button-image').should('have.length', 19)
  })

})