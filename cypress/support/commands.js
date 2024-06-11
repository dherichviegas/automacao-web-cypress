/// <reference types="cypress" />

Cypress.Commands.add('Login', (email, password) => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#login').click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/login')
  });
  cy.get('body > nav > button').should('be.visible');
});

Cypress.Commands.add('MsgInvalid', (email, password) => {
  cy.get('[class="MuiAlert-icon css-1l54tgj"]').should('be.visible');
  cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text', 'E');
});
