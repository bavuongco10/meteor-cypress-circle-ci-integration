/// <reference types="Cypress" />

context('Example', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000')
  });


  it('have title', () => {
    cy.title().should('eq', 'meteor-cypress-circle-ci-integration');
    cy.get('#react-target').contains('Learn Meteor!');
    expect('hello').to.equal('hello');
  })
});
