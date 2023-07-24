import { LoginElement } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElement.textboxes.username.type(username)
    }

    static insertPassword(password){
        LoginElement.textboxes.password.type(password)
    }

    static clickOnLoginButton(){
        LoginElement.buttons.login.click()
    }

    static login(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
}
