import { HomeElements } from "./home.elements";

export class HomeMethods{
    static clickOnPhonesOption(){
        HomeElements.categoriesMenu.phones.click();
   }

   static clickOnlaptopsOption(){
    HomeElements.categoriesMenu.laptops.click();
   }

   static clickOnMonitorsOption(){
    HomeElements.categoriesMenu.monitors.clickI();
   }

   static clickOnProductLink(productName){
    HomeElements.product(productName).click();
   }

}