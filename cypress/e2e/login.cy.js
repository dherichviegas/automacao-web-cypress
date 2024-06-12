/// <reference types="cypress" />
const element = require("../fixtures/login.json")

//Config hooks
beforeEach(() => {
  cy.visit('https://automacao.qacoders-academy.com.br/login');
});

afterEach(() =>{
  cy.screenshot();
})

describe('Login', () => {
  it('Login sucess', () => {
   const email = Cypress.env('EMAIL');
   const password = Cypress.env('PASSWORD');

    cy.Login(email, password)

  });
  
  it('Login password invalid', () => {
    cy.get(element.input_login).type(Cypress.env('EMAIL'));
    cy.get(element.input_password).type(Cypress.env('PASSWORD_INVALID'));
    cy.get(element.btn_login).click();

    cy.MsgInvalid();

});
it('Login email invalid', () => {
  cy.get(element.input_login).type(Cypress.env('EMAIL_INVALID'));
  cy.get(element.input_password).type(Cypress.env('PASSWORD'));
  cy.get(element.btn_login).click();

  cy.MsgInvalid();

});
});