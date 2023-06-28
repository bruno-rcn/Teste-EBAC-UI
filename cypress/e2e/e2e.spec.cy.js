/// <reference types="cypress" />
import e2ePage from "../support/page-objects/e2e.page";
const perfil = require('../fixtures/perfil.json');

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()
        e2ePage.realizarUmPedido('M', "Green")
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });


})