//Config hooks
beforeEach(() => {
  cy.visit('https://automacao.qacoders-academy.com.br/login');
});

describe('Login', () => {
  it('Login sucess', () => {
   const email = Cypress.env('EMAIL');
   const password = Cypress.env('PASSWORD');

    cy.Login(email, password)

  });
  
  it('Login password invalid', () => {
    cy.get('#email').type(Cypress.env('EMAIL'));
    cy.get('#password').type('1234@T');
    cy.get('#login').click();

    cy.MsgInvalid();

});
it('Login email invalid', () => {
  cy.get('#email').type('teste@teste.com.br');
  cy.get('#password').type(Cypress.env('PASSWORD'));
  cy.get('#login').click();

  cy.MsgInvalid();

});
});