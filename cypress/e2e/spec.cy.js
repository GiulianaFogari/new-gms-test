/// <reference types="cypress"/>


describe('US-0012 Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve fazer o cadastro de campos obrigatórios', () => {

    var email = `giuliana${Date.now()}@teste.com`
    cy.preencherCadastro('Giuliana', 'Fogari', email, '12345678765', 'Teste@12345')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Deve validar a mensagem de erro com o campo nome válido', () => {
    cy.preencherCadastro('Giuliana20', 'Fogari', 'teste@teste.com', '12345678765', 'Teste@12345')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  })

});