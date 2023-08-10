import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
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
    static verifyCartPageIsShown(){
        cy.url().should('include', 'cart.html')

    }

    static deleteProducts(){
        cy.get('a[onclick*="deleteItem"]').each(link=>{
            link.click()
            cy.wait(1000)
        })
    }
    static emptyCart(username, password){
        //CommonPageMethods.navigateToDemoBlaze();
        //CommonPageMethods.logout();   
       // CommonPageMethods.ClickOnHomeOption();
      //  CommonPageMethods.ClickOnLoginOption();
      //  LoginMethods.login(username, password)
        Logger.subStep('Click on Cart Option')
        CommonPageMethods.clickOnCartOptions();
        Logger.subStep('Delete products from cart')
        this.deleteProducts();



    }

}