export class ProductDetailElements{
    static get buttons(){
        return{
            get addToCart(){
                return cy.contains('a', 'Add to cart')
            },
        };
    }
}