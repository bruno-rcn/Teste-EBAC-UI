/// <reference types="cypress"/>
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade endereços - Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then(dados=>{
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento("Bruno", "Noberto", "EBAC", "Portugal", "Av dos Bernardos", "1078", "Cascais", "2750-001", "9573829878", "outro@email.com")
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].cep,
            dadosEndereco[0].tel,
            dadosEndereco[0].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

});