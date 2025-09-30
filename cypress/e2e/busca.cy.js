/// <reference types="cypress"/>

describe('Funcionalidade: Busca Filme Corretamente', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve Buscar Filmes com Sucesso', () => {
        cy.get('#search-input').type('Jurassic Park')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', "Jurassic Park")
        cy.wait(2500)
    });

    it('Deve buscar filmes com sucesso de uma lista', () => {
        cy.fixture('filmes').then((filmes) => {
            cy.get('#search-input').type(filmes[3].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[3].titulo)
            cy.wait(2500)
        })
    });

    it('Deve buscar filmes com sucesso de uma lista inteira', () => {
        cy.fixture('filmes').each((filmes) => {
            cy.get('#search-input').clear().type(filmes.titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes.titulo)
            cy.wait(500)
        })
    });

    it('Deve Fazer a Busca Por Filme de Forma Incorreta (Não Existente)', () => {
        cy.get('#search-input').type('%@!#')
        cy.get('#search-button').click()
        cy.get('#results-section > p').should('contain', "Filme não encontrado.")
        cy.wait(2500)
    });

    it('Deve Fazer limpeza da Busca Por Filme', () => {
        cy.get('#clear-button').click()
        cy.get(':nth-child(1) > h3').should('not.exist')
        cy.wait(2500)
    })
})
