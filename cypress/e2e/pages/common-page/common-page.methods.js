import { commonPageData } from "./common-page.data";
import { commonPageElements } from "./common-page.elements";

export class commonPageMethods{
    static get navigateToDemoBlaze(){
        cy.visit(commonPageData.url);
    }
    static ClickOnHomeOption(){
        commonPageElements.topMenu.home.click();
    }
    static ClickOnContactOption(){
        commonPageElements.topMenu.contact.click();
    }
    static ClickOnAbotUsOption(){
        commonPageElements.topMenu.aboutUs.click();
    }
    static clickOnCartOptions(){
        commonPageElements.topMenu.cart.click();
    }
    static ClickOnLoginOption(){
        commonPageElements.topMenu.login.click();
    }
    static ClickOnSignUpOption(){
        commonPageElements.topMenu.signup.click();
    }
}