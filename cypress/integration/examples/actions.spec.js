/// <reference types="Cypress" />

context('Example', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000')
  });


  it('have title', () => {
    cy.title().should('eq', 'meteor-cypress-circle-ci-integration');
    cy.get('#react-target').contains('Learn Meteor!');
  });

  it('Click me', () => {
    cy.get('#react-target').contains('0 times');
    cy.get('#react-target').contains('Click Me').click();
    cy.get('#react-target').contains('1 times');

  });
});
