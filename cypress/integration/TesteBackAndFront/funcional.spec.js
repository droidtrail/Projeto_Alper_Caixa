///<reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/CommandsContas'

describe('Should test at a funcional level', () => {
    before(() => {
        cy.fazer_login('ln1234@test.com.br', '212223')
        cy.resetApp()
    });

    beforeEach(() => {
        cy.get(loc.MENU.TELA_HOME).click()
    });

    it('Should create an account', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste LN')
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso!')
    });

    it('Should update an account', () => {
        cy.acessarMenuConta()
        cy.xpath(loc.TELA_CONTAS.FN_XP_BTN_ALTERAR('Conta para alterar'))
            .click()
        cy.get(loc.TELA_CONTAS.NOME_CONTA)
            .clear()
            .type('Conta para alterar LN Alterada')
        cy.get(loc.TELA_CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada')
    });

    it('Should not create an account with same name', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta mesmo nome')
        cy.get(loc.MESSAGE, { timeout: 10000 }).should('contain', 'code 400')
    });

    it('Should create a transaction', () => {
        cy.get(loc.MENU.MOVIMENTACAO).click()
        cy.get(loc.TELA_MOVIMENTACAO.TXT_DESCRICAO).type('Teste 1')
        cy.get(loc.TELA_MOVIMENTACAO.TXT_INTERESSADO).type('Teste 1')
        cy.get(loc.TELA_MOVIMENTACAO.TXT_VALOR).type(123)
        cy.get(loc.TELA_MOVIMENTACAO.SELEC_CONTA).select('Conta para movimentacoes')
        cy.get(loc.TELA_MOVIMENTACAO.BTN_APLICACAO).click()
        cy.get(loc.TELA_MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Movimentação inserida')
        cy.get(loc.TELA_EXTRATO.LISTA_EXTRATOS).should('have.length', 7)
    });

    it('Should get balance', () => {
        cy.get(loc.MENU.TELA_HOME).click()
        cy.xpath(loc.TELA_SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain', '534,00')
        cy.get(loc.TELA_EXTRATO.BTN_EXTRATO).click()
        cy.xpath(loc.TELA_EXTRATO.FN_XP_EDITAR_ELEMENTO('Movimentacao 1, calculo saldo')).click()
        cy.get(loc.TELA_MOVIMENTACAO.TXT_DESCRICAO).should('have.value', 'Movimentacao 1, calculo saldo')
        cy.get(loc.TELA_MOVIMENTACAO.BTN_APLICACAO).click()
        cy.get(loc.TELA_MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Movimentação alterada')
    });

    it('Should remove a transaction', () => {
        cy.get(loc.TELA_EXTRATO.BTN_EXTRATO).click()
        cy.xpath(loc.TELA_EXTRATO.FN_XP_REMOVER_ELEMENTO('Movimentacao para exclusao')).click()
        cy.get(loc.MESSAGE).should('contain', 'Movimentação removida')
    });
});

