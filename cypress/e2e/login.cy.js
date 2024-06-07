describe('Login', () => {
  it('Login with sucess', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login');
    cy.get('#email').type('sysadmin@qacoders.com');
    cy.get('#password').type('1234@Test');
    cy.get('#login').click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/login')
    });

    cy.get('body > nav > button').should('be.visible');
  });
});