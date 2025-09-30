// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('preencherCadastro', (nome, sobrenome, email, telefone, senha, response) => {
  if (nome !== undefined) cy.get('#signup-firstname').clear().type(nome)
  if (sobrenome !== undefined) cy.get('#signup-lastname').clear().type(sobrenome)
  if (email !== undefined) cy.get('#signup-email').clear().type(email)
  if (telefone !== undefined) cy.get('#signup-phone').clear().type(telefone)
  if (senha !== undefined) cy.get('#signup-password').clear().type(senha)
  cy.get('#signup-button').click()
  cy.get('#signup-response').should('contain', response)
})