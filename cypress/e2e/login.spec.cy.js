/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json');

context('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    })

    it('Deve exibir uma mensagem de erro ao inserir email ou senha invalidos', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('12345')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })

    it('Deve fazer login com sucesso - utilizando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
    })

})
