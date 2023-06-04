describe('form', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=3', {
      statusCode: 200,
      fixture: 'jokes1.json'
    })
      .visit('http://localhost:3000/')
      .get('.button-image').first().click().get('.generator-container')
  });

  it('the user should see the image they clicked on within the meme generator', () => {
    cy.get('.meme-image').should('have.attr', 'src').and('include', 'https://i.imgur.com/6AgsAtM.png')
  });

  it('the first joke option should have a specific value', () => {
    cy.get('[type="radio"]').first().should('have.attr', 'value', "I'm worried for the calendar because its days are numbered.")
  });

  it('the last joke option should have a specific value', () => {
    cy.get('[type="radio"]').last().should('have.attr', 'value', "How does a lawyer say goodbye? I'll be suing ya!")
  });

  it('it should let the user know if there was an error getting jokes', () => {
    cy.intercept('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=3', {
      statusCode: 500,
    })
      .visit('http://localhost:3000/')
      .get('.button-image').first().click()
      .get('p').contains('Oops, something went wrong. Error: 500 jokes...')
  });

  it('when a user clicks a joke option, they should see the correct text within the meme generator', () => {
    cy.get('[type="radio"]').first().click()
      .get('.meme-joke').should('contain', "I'm worried for the calendar because its days are numbered.")
  });

  it('when a user clicks the get new jokes button, they should see new jokes', () => {
    cy.intercept('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=3', {
      statusCode: 200,
      fixture: 'jokes2.json'
    })
      .get('.form-button').first().click()
      .get('[type="radio"]').last().should('have.attr', 'value', "What's orange and sounds like a parrot? A carrot.")
  });

  it('when a user clicks the save meme button, their saved meme should be visible on the saved memes page', () => {
    cy.get('[type="radio"]').first().click()
      .get('.meme-joke').should('contain', "I'm worried for the calendar because its days are numbered.")
      .get('.form-button').last().click()
      .get('.header-button').last().click()
      .get('.meme-joke').first().should('contain', "I'm worried for the calendar because its days are numbered.")
      .get('.meme-image').should('have.attr', 'src').and('include', 'https://i.imgur.com/6AgsAtM.png')
  });

  it('if a user has not selected a joke and clicks the save meme button, they should be notified', () => {
    cy.get('.form-button').last().click();
    cy.on('window:alert', (text: string) => {
      expect(text).to.equal("Please select a joke before saving.")
    })
  });
})

