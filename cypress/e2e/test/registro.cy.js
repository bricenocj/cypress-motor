import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { SignupMethods } from "../pages/signup/signup.methods";
import { Logger } from "../util/logger";
const user = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7);
const existingUser = LoginData.validCredentials.username

xdescribe(CommonPageData.testSuite.registro, ()=>{
    it('Registro de usuario Válido', ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clicl en "Sign up" en la barra de navegación')
        CommonPageMethods.ClickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida')
        //SignupMethods.signup(bricenocj, cucho123)
        SignupMethods.insertUsername(existingUser)
        SignupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacer clik en "Sign up" para registrar el usuario')
        SignupMethods.clickOnSignupButton();
        //cy.wait(200000)
        
        Logger.verification('Verificar que se muestre el mensaje "Sign up successful."')
        SignupMethods.verifySignupSuccesfulMessageIsDisplayed()
    });
    it('<Registro de usuario inválido', ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en "Sign up" en la barra de navegación')
        CommonPageMethods.ClickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar algunos campos con información inválida')
        //SignupMethods.signup(bricenocj, cucho123)
        SignupMethods.insertUsername(existingUser)
        SignupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacer clik en "Sign up" para registrar el usuario')
        SignupMethods.clickOnSignupButton();
        //cy.wait(200000)
        
        Logger.verification('Verificar que se muestra un mensaje de error indicando los campos invalidos"')
        SignupMethods.verifiThatThisUserAlreadyExistMessageIsDisplayed();
    });
})