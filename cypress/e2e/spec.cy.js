/// <reference types="cypress"/>

describe('Funcionalidade: Cadastro de Membros', () => {
  it('Deve Fazer o Cadastro de Campos Obrigatórios', () => {
    cy.visit('http://localhost:8080/')
    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Araujo')
    cy.get('#signup-email').type('fabio2@testes.com')
    cy.get('#signup-phone').type('11983298983')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})