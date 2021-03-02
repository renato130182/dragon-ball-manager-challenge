/// <reference types="cypress" />

context('Should filter balls',() => {
    before(() => {
        cy.visit('http://localhost:3000/dragon-ball-manager')
      })

    it('Should visible my balls',() =>{
        cy.get('[data-testid="filter"]').select('me')
        cy.get('[data-testid="card"]').should('have.length',4)
    })

    it('Should visible not me balls',() =>{
        cy.get('[data-testid="filter"]').select('notme')
        cy.get('[data-testid="card"]').should('have.length',3)
    })

    it('Should visible all balls',() =>{
        cy.get('[data-testid="filter"]').select('all')
        cy.get('[data-testid="card"]').should('have.length',7)
    })
})