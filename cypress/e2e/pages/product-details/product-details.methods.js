import { CommonPageMethods } from "../common-page/common-page.methods";
import { ProductDetailElements } from "./product-details.elements";

export class ProductsDetailsMethods{
    static clickOnAddToCartButton(){
        ProductDetailElements.buttons.addToCart.click();
    }

    static verifyProductDetailPageDisplay(){
        ProductDetailElements.buttons.addToCart.should('be.visible')
    }

    static verifiProductAddedMessage(){
        CommonPageMethods.verifyAlert('Product added')
    }
}