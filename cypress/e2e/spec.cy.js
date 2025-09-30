/// <reference types="cypress"/>

describe('Funcionalidade: Cadastro de Membros Incorretas', () => {
  it('Deve Fazer o Cadastro de Campos Obrigatórios de Forma Incorreta', () => {
    cy.visit('http://localhost:8080/')

    //Cadastro em Branco
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Nome não pode estar vazio')
    cy.wait(500)
    cy.get('#signup-firstname').clear().type("Luiz")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Sobrenome não pode estar vazio')
    cy.wait(500)
    cy.get('#signup-lastname').type('Araujo')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'E-mail não pode estar vazio')
    cy.wait(500)
    cy.get('#signup-email').type('fabio2@testes.com')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Senha não pode estar vazia')
    cy.wait(500)

    //Finaliza o Cadastro em Branco, completando todas as info, deixando apenas o campo telefone em branco, verificando o cadastro sem preencher o telefone
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.wait(1500)

    //nome incorreto
    cy.get('#signup-firstname').clear().type(1234)
    cy.get('#signup-lastname').clear().type('Araujo')
    cy.get('#signup-email').clear().type('fabio2@testes.com')
    cy.get('#signup-phone').clear().type('11983298983')
    cy.get('#signup-password').clear().type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
    cy.wait(1000)

    //sobrenome incorreto
    cy.get('#signup-firstname').clear().type("Luiz")
    cy.get('#signup-lastname').clear().type(1234)
    cy.get('#signup-email').clear().type('fabio2@testes.com')
    cy.get('#signup-phone').clear().type('11983298983')
    cy.get('#signup-password').clear().type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
    cy.wait(1000)

    //email incorreto
    cy.get('#signup-firstname').clear().type("Luiz")
    cy.get('#signup-lastname').clear().type("Araujo")
    cy.get('#signup-email').clear().type('fabio2testes.com')
    cy.get('#signup-phone').clear()
    cy.get('#signup-password').clear().type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'E-mail deve ser um email válido')
    cy.wait(1000)

    //senha fraca
    cy.get('#signup-firstname').clear().type("Luiz")
    cy.get('#signup-lastname').clear().type("Araujo")
    cy.get('#signup-email').clear().type('fabio2@testes.com')
    cy.get('#signup-phone').clear()
    cy.get('#signup-password').clear().type('1234')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
    cy.wait(1000)
  })
})

//Email Repetido e Cadastro Completo
describe('Funcionalidade: Cadastro de Membros com email Repetido', () => {
  it('Deve Fazer o Cadastro de Campos Obrigatórios Utilizando Informações Repetidas e As Corrigindo na Sequência', () => {
    cy.visit('http://localhost:8080/')

    cy.get('#signup-firstname').type('Fábio')
    cy.get('#signup-lastname').type('Araujo')
    cy.get('#signup-email').type('teste@teste.com')
    cy.get('#signup-phone').type('11983298983')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Este email já está cadastrado.')
    cy.wait(1500)
    cy.get('#signup-email').clear().type('novoemail@testes.com')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
    cy.wait(2500)
  })
})

//Busca Filme Incorreto
describe('Funcionalidade: Busca Filme Inorretamente', () => {
  it('Deve Fazer a Busca Por Filme', () => {
    cy.visit('http://localhost:8080/')

    cy.get('#search-input').type('%@!#')
    cy.get('#search-button').click()
    cy.get('#results-section > p').should('contain' , "Filme não encontrado.")
    cy.wait(5000)
  })
})

//Limpar Busca
describe('Limpar Busca', () => {
  it('Deve Fazer limpeza da Busca Por Filme', () => {
    cy.visit('http://localhost:8080/')
    cy.get('#clear-button').click()
    cy.get(':nth-child(1) > h3').should('not.exist')
    cy.wait(5000)
  })
})

//Busca Filme Correto
describe('Funcionalidade: Busca Filme Corretamente', () => {
  it('Deve Fazer a Busca Por Filme', () => {
    cy.visit('http://localhost:8080/')

    cy.get('#search-input').type('Jurassic Park')
    cy.get('#search-button').click()
    cy.get(':nth-child(1) > h3').should('contain' , "Jurassic Park")
    cy.wait(5000)
  })
})


