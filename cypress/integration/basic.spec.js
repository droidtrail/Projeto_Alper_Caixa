///<reference types="cypress"/>

describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal','Campo de Treinamento')
        cy.title().should('contain','Campo')

        cy.title()
            .should('be.equal','Campo de Treinamento')
            .and('contain','Campo')

        let syncTitle

        cy.title().then(title => {
            console.log(title)

        cy.get('#formNome').type(title)  
        syncTitle = title

        })  

        cy.get('#elementosForm\\:sugestoes').then($sel =>{
            cy.wrap($sel).type(syncTitle)
        })
        
        cy.get('[data-cy=dataSobrenome]').then($sel =>{
            $sel.val(syncTitle)
        })

    });

    it('Should find and interact with an element', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#btnLogin')
            .click()
        cy.get('#spanMessage')
            .should('contain','Username cannot be empty').debug()
        
    });

    

});