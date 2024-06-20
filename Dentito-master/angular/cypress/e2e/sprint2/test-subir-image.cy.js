describe('Test Subir imagen', () => {
    it('Botón agregar imagen', () => {
        cy.visit('localhost:4200/dashboard-estudiante/view')
        cy.contains('Subir imagen')
        cy.contains('Subir imagen').click()
        const imagen = 'diente.png'
        cy.get('input[type="file"]').attachFile(imagen)
        cy.contains('Visualizar informe en PDF').click()
    })
});
