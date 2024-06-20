describe('Test Acceso al informe', () => {
    it('Acceso a informe', () => {
        cy.visit('localhost:4200')
        cy.contains('Informes')
        cy.contains('Informes').click()
        cy.get('img#eye-btn').should('exist').click({force:true})
    });
});