describe('CP002-Aplicar filtro de equipos -Gama.Alta -Memoria Interna.256GB', function(){
    beforeEach(function(){
        cy.visit('https://tienda.movistar.com.ar/');
    })
    it('Utilizar filtros de página "Gama Alta" & "256GB"', function(){
        cy.get('li > .btn-group > .btn-filter').click(); //click en 'Filtrar por'
        cy.get(':nth-child(4) > .filter-group > .filter-data-section > :nth-child(3) > a > .filter-info-label').click(); //click en filtro "Gama Alta"
        cy.get('li > .btn-group > .btn-filter').click(); //click nuevamente en 'Filtrar por'
        cy.get(':nth-child(3) > .filter-group > .filter-data-section > :nth-child(2) > a > .filter-info-label').click(); //click en filtro "256GB"
        cy.get('.toolbar-bottom > .toolbar > .pager > .count-container > .amount > strong').should('contain','Artículo(s)'); // Se checkea que el artículo tenga 12 cuotas
    }) 
})