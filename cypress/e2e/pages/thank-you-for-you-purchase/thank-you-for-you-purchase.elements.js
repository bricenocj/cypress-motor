export class ThankYouForYouPurchaseElements{
    static get buttoms(){
        return{
            get ok(){
                return cy.contains("button", "OK");
            },
        };
    }

    static get icons(){
        return{
            get greenCheckMark(){
                return cy.get('.sa-success');
            },
        };
    }
}