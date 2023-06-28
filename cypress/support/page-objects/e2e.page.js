class E2EPage {

    realizarUmPedido(tamanho,cor){


        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.product-block').first().click()
        cy.get('.button-variable-item-'+tamanho).click()
        cy.get('.button-variable-item-'+cor).click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        cy.get('.checkout-button').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }

}

export default new E2EPage()