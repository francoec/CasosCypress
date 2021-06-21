// el archivo tiene que estar en '../support/pages/index';
class pathnameP{
    constructor(){
        //CP006
        this.searchBtn = '.icon-search.pnt-js-boton-buscador';
        this.searchType = '.dnavigation__search-input';
        this.location = 'pathname';
        //CP005
        this.menu = '[class="dnavigation__link"]';
        this.submenu = '[class="dnavigation__link"]';
        this.location = 'pathname';
    }
    //CP006
    search = (marca) =>{
        cy.get(this.searchBtn).click();
        cy.get(this.searchType).type(marca);
        cy.location(this.location).should('eq', '/catalogsearch/result/');
    }
    //CP005
    busqueda = (element) =>{
        cy.get(this.menu).eq(1).click();
        cy.get(this.submenu).eq(element).click();
        
    }
    busqueda2 = (element2) =>{
        cy.location(this.location).should('eq', element2);
    }
}
export default new pathnameP();
