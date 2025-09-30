/// <reference types="cypress"/>

describe('Funcionalidade: Cadastro de Membros Incorretas', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  var email = `fabio${Date.now()}@teste.com`
  

  it('Deve Fazer o Cadastro de Campos Obrigatórios em Branco', () => {
    cy.preencherCadastro(undefined, undefined, undefined, undefined, undefined, 'Nome não pode estar vazio')
    cy.wait(500)
    cy.preencherCadastro("Luiz", undefined, undefined, undefined, undefined, 'Sobrenome não pode estar vazio')
    cy.wait(500)
    cy.preencherCadastro("Luiz", "Araujo", undefined, undefined, undefined, 'E-mail não pode estar vazio')
    cy.wait(500)
    cy.preencherCadastro("Luiz", "Araujo", email, undefined, undefined, 'Senha não pode estar vazia')
    cy.wait(500)
    cy.preencherCadastro("Luiz", "Araujo", email, undefined, "Teste!@2020", 'Cadastro realizado com sucesso!')
    cy.wait(500)
  })

  it('Deve Fazer o Cadastro do Campo Nome de Forma Incorreta', () => {
    cy.preencherCadastro("Luiz20", "Araujo", email, "11988883333", "Teste!@2020", 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
    cy.wait(500)
  })

  it('Deve Fazer o Cadastro do Campo Sobrenome de Forma Incorreta', () => {
    cy.preencherCadastro("Luiz", "Araujo123", email, "11988883333", "Teste!@2020", 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
    cy.wait(500)
  })

  it('Deve Fazer o Cadastro do Campo Email de Forma Incorreta', () => {
    cy.preencherCadastro("Luiz", "Araujo", "teste2teste.com", "11988883333", "Teste!@2020", 'E-mail deve ser um email válido')
    cy.wait(500)
  })

  it('Deve Fazer o Cadastro do Campo Senha de Forma Fraca', () => {
    cy.preencherCadastro("Luiz", "Araujo", email, "11988883333", "1234", 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
    cy.wait(500)
  })

  it('Deve Fazer o Cadastro de Campos Obrigatórios Utilizando Informações Repetidas e As Corrigindo na Sequência', () => {
    cy.preencherCadastro('Fábio', 'Araujo', 'teste@teste.com', '11983298983', 'Teste@1234', 'Este email já está cadastrado.')
    cy.wait(1500)
    cy.preencherCadastro('Fábio', 'Araujo', `novoemail${Date.now()}@teste.com`, '11983298983', 'Teste@1234', 'Cadastro realizado com sucesso!')
    cy.wait(1500)
  })
})
