/// <reference types="cypress"/>

describe('Funcionalidade pagina de produtos', () => {
    
    beforeEach(() => {
        cy.visit('home/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.product-block').first().click()
    });

    it('Deve adicionar um produto a o carrinho', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.product-block').first().click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
    });

    it('Deve adicionar um produto a o carrinho usando comandos customizados', () => {
        cy.addProdutos('M', 'Green')
    });

});