describe('Test Generar PDF', () => {
        it('Botón generación pdf', () => {
        cy.visit('localhost:4200/dashboard-estudiante/view')
        cy.contains('Visualizar informe en PDF')
        cy.contains('Visualizar informe en PDF').click()
    })
});
