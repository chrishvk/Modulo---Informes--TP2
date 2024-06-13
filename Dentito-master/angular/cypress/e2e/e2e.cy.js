describe('Test E2E', () => {
    it('Acceso a informe', () => {
        cy.visit('localhost:4200')
        cy.contains('Informes')
        cy.contains('Informes').click()
        cy.get('img#eye-btn').should('exist').click({force:true})
    });

    it('Botón generación pdf', () => {
        cy.visit('localhost:4200/dashboard-estudiante/view')
        cy.contains('Visualizar informe en PDF')
        cy.contains('Visualizar informe en PDF').click()
    })

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

    it('Botón agregar imagen', () => {
        cy.visit('localhost:4200/dashboard-estudiante/view')
        cy.contains('Subir imagen')
        cy.contains('Subir imagen').click()
        const imagen = 'diente.png'
        cy.get('input[type="file"]').attachFile(imagen)
        cy.contains('Visualizar informe en PDF').click()
    })
});
