describe('Criar Login', () => {

  
  beforeEach(() => {
    cy.login('fulano@qa.com','teste')

  });

  it('passes', () => {
    cy.visit('https://front.serverest.dev/admin/home');
  });
});
