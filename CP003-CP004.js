describe('CP003-Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa', function(){
    before(function(){
        cy.visit('https://tienda.movistar.com.ar');
    })
    it('Seleccionar 3er equipo en la página inicial', function(){
        cy.get('[class=product-image]').eq(2).click();
        cy.get('[id="open-modal-installments"]').click();
        cy.get('#selectBank').select('Credicoop');
        cy.get('#selectCardByBank').select('Visa');
        cy.get('#bodyTable').contains('td', '60').should('not.exist'); //en este caso uso contains para ubicar un td con valor 60 y luego valido que no exista este elemento
    })
})

describe('CP004-validar que en los distintos dispositivos Ios se visualice el Banner de la página principal de la tienda ', function(){
    before(function(){
        console.log('Correr mi test')
    })
    beforeEach(function(){
        cy.visit('https://tienda.movistar.com.ar');
    })
    it('Abrir en iphone 6+', function(){
        cy.viewport(414, 736);
        cy.get('[class="banner-info"]').should('be.visible');
        cy.wait(200); // espera de 2 segundos
    })
    it('Abrir en iphone 7/8', function(){
        cy.viewport(375, 667);
        cy.get('[class="banner-info"]').should('be.visible');
        cy.wait(200);
    })
    it('Abrir en iphone x', function(){
        cy.viewport(375, 812);
        cy.get('[class="banner-info"]').should('be.visible');
        cy.wait(200);
    })
    it('Abrir en iphone xr', function(){
        cy.viewport(414, 896);
        cy.get('[class="banner-info"]').should('be.visible');
        cy.wait(200);
    })
})