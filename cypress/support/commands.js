// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import cypress from 'cypress'
import loc from './locators'

Cypress.Commands.add('fazer_login', (user, passwd) => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(loc.LOGIN.USER).type('ln1234@test.com.br')
    cy.get(loc.LOGIN.PASSWORD).type('212223')
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.MESSAGE, { timeout: 6000 }).should('contain', 'Bem vindo')
})

Cypress.Commands.add('resetApp', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.RESET).click()
})

Cypress.Commands.add('getToken', (user, passwd) => {
    cy.request({
        url: 'https://barrigarest.wcaquino.me/signin',
        method: 'POST',
        body: {
            email: user,
            senha: passwd,
            redirecionar: false
        }
    }).its('body.token').should('not.be.empty')
        .then(token => {
            return token
        })
})

Cypress.Commands.add('resetRest',()=>{
    cy.getToken('ln1234@test.com.br','212223').then(token=>{
        cy.request({
            method:'GET',
            url:'https://barrigarest.wcaquino.me/reset',
            headers: { Authorization: `JWT ${token}` }
        })
    }) 
})
