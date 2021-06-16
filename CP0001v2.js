describe('CP001v2-Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A51', function(){
    before(function(){
        cy.visit('https://tienda.movistar.com.ar/');
    })
    it('Buscar equipo A51', function(){
        cy.get('.icon-search.pnt-js-boton-buscador').click('');
        cy.get('.dnavigation__search-input').type('A51{enter}');
        cy.get('.movistar-product-image-clickable').click(); 
        cy.get('.price-installments').should('contain','12 cuotas');
    })
})
// Es el mismo caso, solo que busque los elementos de distinta manera y use 'before'