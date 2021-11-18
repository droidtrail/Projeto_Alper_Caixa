import loc from './locators'

Cypress.Commands.add('acessarMenuConta',()=>{
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
})

Cypress.Commands.add('inserirConta',NomeDaConta =>{
    cy.get(loc.TELA_CONTAS.NOME_CONTA).type(NomeDaConta)
    cy.get(loc.TELA_CONTAS.BTN_SALVAR).click()
})