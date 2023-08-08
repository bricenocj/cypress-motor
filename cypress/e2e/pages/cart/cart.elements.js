export class CartElements{
    static get buttoms(){
        return{
            get placeOrder(){
                return cy.get('button[data-toggle="modal"]')
            },
        };
    }
    //td[text()="Nokia lumia 1520"]/ancestor::tr//a
    static get links(){
        return{
            delete(productName){
              return cy.contains("td", productName).closest("tr").find("a");
            },

        };
    }
}