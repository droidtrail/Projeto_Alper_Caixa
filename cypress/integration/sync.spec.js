///<reference types="cypress"/>

describe('Esperas...', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        /*https://opensource-demo.orangehrmlive.com/*/ 
    }); 

    beforeEach(() => {
        cy.reload()
    });

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo')
            .should('not.exist')
        
        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo')
            .should('exist')
            .type('Funciona!!!')
    });

    it('Deve fazer retrys', () => {
        cy.get('#novoCampo')
            .should('not.exist')

        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo')
            .should('not.exist')

        cy.get('#novoCampo')
            .should('exist')
            .type('Funciona...')
            
    });

    it('Uso do find', () => {
        cy.get('#buttonList')
            .click()

        cy.get('#lista')
            .find('span')
            .should('have.text','Item 1')

        cy.get('#lista span')
        .should('contain','Item 2')
    });

    it('Uso do timeout', () => {

       /*  cy.get('#buttonDelay')
            .click()
        cy.get('#novoCampo',{timeout: 3000})
            .should('exist') */

        /* cy.get('#buttonListDOM')
            .click()
        cy.get('#lista li span',{timeout: 10000})
            .should('contain', 'Item 2')  */
            
        cy.get('#buttonListDOM')
            .click()

        cy.get('#lista li span')
            .should('have.length', '1') 

        cy.get('#lista li span')     
            .should('have.length', '2')  
            
    });

    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value','111')
    });

    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM')
            .click()

        cy.get('#lista li span').then($el =>{
            expect($el).to.have.length(1)
        })
             
    });
});