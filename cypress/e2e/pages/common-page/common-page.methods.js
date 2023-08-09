import { CommonPageData, commonPageData } from "./common-page.data";
import { CommonPageElements, commonPageElements } from "./common-page.elements";

export class CommonPageMethods{
    static navigateToDemoBlaze(){
        cy.clearCookies();
        cy.visit(CommonPageData.url);
    }
    static ClickOnHomeOption(){
        CommonPageElements.topMenu.home.click({force: true});
    }
    static ClickOnContactOption(){
        CommonPageElements.topMenu.contact.click();
    }
    static ClickOnAbotUsOption(){
        CommonPageElements.topMenu.aboutUs.click();
    }
    static clickOnCartOptions(){
        CommonPageElements.topMenu.cart.click();
        Cypress.on('uncaught:exception', (err, runnable) => {
                return false
          })
    }
    static ClickOnLoginOption(){
        CommonPageElements.topMenu.login.click();
    }
    static ClickOnSignUpOption(){
        CommonPageElements.topMenu.signup.click();
    }
    static verifyAlert(expectedMessage){
        cy.on('window:alert', (str) =>{
            expect(str).to.equal(expectedMessage)
        })
    }

    static generateRandomString (length = 10) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    static verifySignedUser(username){
        CommonPageElements.signeduser.should('have.text', `Welcome ${username}`);
    }
}