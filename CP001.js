describe('CP001-Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A51', function(){
    beforeEach(function(){
        cy.visit('https://tienda.movistar.com.ar/');
    })
    it('Buscar equipo A51', function(){
        cy.get('.waves-effect >.icon-search').click();
        cy.get('#myInput').type('A51{enter}');
        cy.get('#product-collection-image-1298').click(); 
        cy.get('.price-installments>[display="inline"]').should('contain','12 cuotas');
    })
})