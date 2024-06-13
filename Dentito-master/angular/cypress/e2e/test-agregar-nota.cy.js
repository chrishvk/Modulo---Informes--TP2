describe('Test Agregar notas', () => {
    it('Botón agregar nota', () => {
        cy.visit('localhost:4200/dashboard-estudiante/view')
        cy.contains('Agregar notas')
        cy.contains('Agregar notas').click()
        cy.get('input#noteInput').should('exist')
        cy.get('input#noteInput').should('exist').type('Prueba E2E')
        cy.get('input#submitButton').should('exist').click()
        cy.contains('Prueba E2E')
        cy.contains('Visualizar informe en PDF').click()
    })
});
