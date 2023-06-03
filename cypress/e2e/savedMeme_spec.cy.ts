describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=3', {
      statusCode: 200,
      fixture: 'jokes.json'
    });
    cy.visit('http://localhost:3000/');
  });


  it('when a user clicks the save meme button, their saved meme should be visible on the saved memes page', () => {
    cy.get('[type="radio"]').first().click()
    .get('.meme-joke').should('contain', "I'm worried for the calendar because its days are numbered.")
    .get('.form-button').last().click()
    .get('.header-button').last().click()
    .get('.meme-joke').first().should('contain', "I'm worried for the calendar because its days are numbered.")
  })

  it()
})