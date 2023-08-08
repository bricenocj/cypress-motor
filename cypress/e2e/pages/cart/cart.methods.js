import { CartElements } from "./cart.elements";

export class CartMethods{
    static ClickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }
    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')
    }

    static clickOnButtonPlaceOrder(){
        CartElements.buttoms.placeOrder.click({force: true});
    }
}