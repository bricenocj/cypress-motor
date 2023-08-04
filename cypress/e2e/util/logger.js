export class Logger{
    static stepNumber(number){
        const text = `Step # ${number}`
        cy.log(text)
        cy.allure().step(text)
    }
    static step(descripcion){
        const text = `Step - ${descripcion}`
        cy.log(text)
        cy.allure().step(text)
    }
    static verification(descripcion){
        const text = `Verification - ${descripcion}`
        cy.log(text)
        cy.allure().step(text)
    }
    static subStep(descripcion){
        const text = `Substep - ${descripcion}`
        cy.log(text)
        cy.allure().step(text)
    }
    static subverification(descripcion){
        const text = `Step - ${descripcion}`
        cy.log(text)
        cy.allure().step(text)
    }
}