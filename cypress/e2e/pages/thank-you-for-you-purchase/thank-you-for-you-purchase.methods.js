import { ThankYouForYouPurchaseElements } from "./thank-you-for-you-purchase.elements";

export class ThankYouForYouPurchaseMethods{
    static clikOnOkButton(){
        ThankYouForYouPurchaseElements.buttoms.ok.click();
    }
    static verifiGreenCheckMarkisDisplayed(){
        ThankYouForYouPurchaseElements.icons.greenCheckMark.should("exist");
    }
}
    