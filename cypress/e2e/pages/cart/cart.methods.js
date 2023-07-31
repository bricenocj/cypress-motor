export class CartMethods{
    static ClickOnDeleteLink(productName){
        CartElements.Links.delete(productName).click();
    }
}