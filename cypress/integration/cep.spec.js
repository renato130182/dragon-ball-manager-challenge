/// <reference types="cypress" />

context('Testing page CEP', () => {
    before(()=>{
        cy.visit('http://localhost:3000/form-cep')
    })

    const resposeRequest = () => {
        cy.server()
        cy.route({
            method:'GET',
            url: 'https://viacep.com.br/ws/01001000/json/',
            response: 'fixture:address.json'
        }).as('resAddress')
    }

    it('should response cep',()=>{
        cy.get('[data-testid="cep"]').type('01001000')
        resposeRequest()        
        cy.wait(5000)
        cy.get('[data-testid="bairro"]').should('have.value','Sé')
        cy.get('[data-testid="logradouro"]').should('have.value','Praça da Sé')
    })
})