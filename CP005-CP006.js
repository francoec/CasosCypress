import pathnameP from '../support/pages/index';

describe('CP005 -validar los pathname indicados del sub menu 2 de productos y servicios en la categoría "MÓVIL"', function(){
    beforeEach(function(){
        cy.visit('https://tienda.movistar.com.ar');
    })
    it('URL debería ser https://tienda.movistar.com.ar', function(){
        cy.url().should('eq','https://tienda.movistar.com.ar/');
    })
    it('pathname debería ser portabilidad', function(){
        pathnameP.busqueda(8);
        pathnameP.busqueda2('/productos-y-servicios/portabilidad');
    })
    it('pathname debería ser alta-de-linea', function(){
        pathnameP.busqueda(9);
        pathnameP.busqueda2( '/productos-y-servicios/alta-de-linea');
    })
    it('pathname debería ser planes', function(){
        pathnameP.busqueda(10);
        pathnameP.busqueda2('/productos-y-servicios/planes');
    })
    it('pathname debería ser prepago', function(){
        pathnameP.busqueda(11);
        pathnameP.busqueda2('/prepago'); // no contiene /productos-y-servicios
    })
    it('pathname debería ser roaming', function(){
        pathnameP.busqueda(12);
        pathnameP.busqueda2('/productos-y-servicios/roaming');
    })
    it('pathname debería ser paquetes/pospago', function(){
        pathnameP.busqueda(13);
        pathnameP.busqueda2('/productos-y-servicios/paquetes/pospago');
    })
    it('pathname debería ser /sc/ar/movstore', function(){
        pathnameP.busqueda(14);
        pathnameP.busqueda2('/sc/ar/movstore');
    })
})
describe('CP006 -validar que la redirección del search sea correcto- usar todos los nombres de equipos disponibles: Samsung, LG, Nokia, Motorola, TCL', function(){
    beforeEach(function(){
        cy.visit('https://tienda.movistar.com.ar');
    })    
    it('Type samsung', function(){
        pathnameP.search('samsung{enter}');
        /*cy.get('.icon-search.pnt-js-boton-buscador').click();
        cy.get('.dnavigation__search-input').type('samsung{enter}');
        cy.location('pathname').should('eq', '/catalogsearch/result/');*/
    })
    it('Type motorola', function(){
        pathnameP.search('motorola{enter}');
    })
    it('Type nokia', function(){
        pathnameP.search('nokia{enter}');
    })
    it('Type lg', function(){
        pathnameP.search('lg{enter}');
    })
    it('Type tcl', function(){
        pathnameP.search('tcl{enter}');
    })
})