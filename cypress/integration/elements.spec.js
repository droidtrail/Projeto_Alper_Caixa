///<reference types="cypress"/>
describe('Work with basic elements', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        /*https://opensource-demo.orangehrmlive.com/*/ 
    }); 

    beforeEach(() => {
        cy.reload()
    });

    /* it('Text', () => {

        cy.get('body').should('contain', 'admin123')
    });

    it('Links', () => {

        cy.get('#forgotPasswordLink > a').click()
        cy.get('#btnSearchValues').should('contain', 'Reset Password')
    });

    it('Text Fields', () => {
        cy.get('#txtUsername')
            .type('Admin')
            .clear()
            .type('Usuário Errado{selectall}Admin', {delay: 100})
            .should('have.value', 'Admin')

        cy.get('#txtPassword')
            .type('admin123')
            .clear()
            .type('Senha errada{selectall}admin123',{delay: 100})
            .should('have.value', 'admin123')
    });
 */
    it('RadioButton', () => {
        
        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')
        cy.get('#formSexoFem')
            .should('not.be.checked')

        cy.get("[name='formSexo']")
            .should('have.length', 2)
        
    });

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name=formComidaFavorita]')
            .click({multiple:true})
            
        cy.get('#formComidaPizza')
            .should('not.be.checked')

        cy.get('#formComidaVegetariana')
            .should('be.checked')
    });

    it.only('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value','2graucomp')

        cy.get('[data-test=dataEscolaridade]')
            .select('1o grau completo')
            .should('have.value','1graucomp')

            cy.get('[data-test=dataEscolaridade] option')
                .should('have.length', 8)

            cy.get('[data-test=dataEscolaridade] option').then($arr => {
                const values = []
                $arr.each(function(){
                    values.push (this.innerHTML)
                })
                expect(values).to.include.members(["Superior", "Mestrado"])
            })
    });

    it.only('Combo multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao','Corrida','nada'])

        cy.get('[data-testid=dataEsportes]').then($el => {
            expect($el.val()).to.be.deep.equal(['natacao','Corrida','nada'])
            expect($el.val()).to.have.length(3)
            })    

        cy.get('[data-testid=dataEsportes]')
            .invoke('val')
            .should('eql', ['natacao','Corrida','nada'])

    });
});