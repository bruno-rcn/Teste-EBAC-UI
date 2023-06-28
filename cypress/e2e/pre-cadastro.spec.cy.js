/// <reference types="cypress"/>
const {faker} = require('@faker-js/faker');

describe('Funcionalidade de Pré cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    
    it('Deve completar o pré cadastro com sucesso', () => {
        let emailFaker = faker.internet.email()
        let firstNameFaker = faker.name.firstName()
        let lastNameFaker = faker.name.lastName()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('!teste$te#')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(firstNameFaker)
        cy.get('#account_last_name').type(lastNameFaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it('Deve realizar pre cadastro com sucesso usando comandos customizados', () => {
        let emailFaker = faker.internet.email()
        let firstNameFaker = faker.name.firstName()
        let lastNameFaker = faker.name.lastName()

        cy.preCadastro(emailFaker, '!teste$te#', firstNameFaker, lastNameFaker)
    });

});