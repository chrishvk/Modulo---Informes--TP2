describe("Test Obtención de datos - API", () => {
  it("Datos", () => {
    cy.request("GET", "http://localhost:3001/pacientes").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array").that.is.not.empty;
    });
  });
//   it("Generacion PDF", () => {
//     cy.visit("localhost:4200/dashboard-estudiante/home");
//     cy.contains("Informes");
//     cy.contains("Informes").click();
//     cy.get("img#eye-btn").should("exist");
//   });
//   it("Botón agregar nota", () => {
//     cy.visit("localhost:4200/dashboard-estudiante/view");
//     cy.contains("Agregar notas");
//     cy.contains("Agregar notas").click();
//     cy.get("input#noteInput").should("exist");
//     cy.get("input#noteInput").should("exist").type("Prueba E2E");
//     cy.get("input#submitButton").should("exist").click();
//     cy.contains("Prueba E2E con datos de pacientes");
//     cy.contains("Subir imagen").click();
//     const imagen = "odontograma.jpg";
//     cy.get('input[type="file"]').attachFile(imagen);
//     cy.contains("Visualizar informe en PDF").click();
//   });
});
