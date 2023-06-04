describe('home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=3', {
      statusCode: 200,
      fixture: 'jokes1.json'
    });
    cy.visit('http://localhost:3000/');
  });

  it('it should display logo', () => {
    cy.get('.logo').should('be.visible').and('have.attr', 'src').and('include', 'meme_depot_logo.5a433c14dea18bd747d9.png')
  });

  it('should dislay Home and Saved Meme nav links', () => {
    cy.get('.header-button')
      .should('contain', 'Home')
  });

  it('should have 18 images upon landing', () => {
    cy.get('.button-image').should('have.length', 18)
  });

  it('first image should be a picture of Ron Swanson', () => {
    cy.get('.button-image').first().and('have.attr', 'src').and('include', 'https://i.imgur.com/6AgsAtM.png')
  });

  it('the last image should be a picture of Bob Belcher', () => {
    cy.get('.button-image').last().and('have.attr', 'src').and('include', 'https://i.imgur.com/JjzYBO5.png')
  });

  it('should open meme generator', () => {
    cy.get('.button-image').first().click().get('.generator-container')
  });

  it('should notify users of bad URL paths', () => {
    cy.visit('http://localhost:3000/test')
      .get('.error-message').first()
      .should('contain', "Something went wrong.")
      .get('.error-message').last()
      .should('contain', "URL not found.")
  });
})