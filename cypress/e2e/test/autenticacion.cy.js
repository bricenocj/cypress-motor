import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe (CommonPageData.testSuite.autenticacion, ()=>{
    it('Inicio de sesión válido', ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clicl en "Log in" en la barra de navegación')
        CommonPageMethods.ClickOnLoginOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseña válidos.')
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.validCredentials.password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión.')
        LoginMethods.clickOnLoginButton();
        Logger.verification('Verificar que se redirige al usuario a la página de inicio.');
        CommonPageMethods.verifySignedUser(LoginData.validCredentials.username);
        
        Logger.postCondition('Logout')
        CommonPageMethods.logout();
    });

    it ('Inicio de sesión inválido', ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clicl en "Log in" en la barra de navegación')
        CommonPageMethods.ClickOnLoginOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y/o contraseña inválidos.')
        LoginMethods.insertUsername(LoginData.invalidCredentials.username)
        LoginMethods.insertPassword(LoginData.invalidCredentials.password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión.')
        LoginMethods.clickOnLoginButton();
        Logger.verification('Verificar que se muestra un mensaje de error indicando que el inicio de sesión ha fallado.');
        LoginMethods.veirfyWrongPasswordMessage();

    });
})