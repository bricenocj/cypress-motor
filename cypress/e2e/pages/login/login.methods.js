import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginElement } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElement.textboxes.username.invoke('val', username)
    }

    static insertPassword(password){
        LoginElement.textboxes.password.invoke('val', password)
    }

    static clickOnLoginButton(){
        LoginElement.buttons.login.click()
    }

    static login(username, password){
        Logger.subStep('Insert username')
        this.insertUsername(username)
        Logger.subStep('Insert password')
        this.insertPassword(password)
        Logger.subStep('Click on Login Button')
        this.clickOnLoginButton()
    }
    static veirfyWrongPasswordMessage(){
        CommonPageMethods.verifyAlert("Wrong password.");
    }
}
