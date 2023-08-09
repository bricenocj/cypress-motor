import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeData } from "../pages/home/home.data";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { PlaceOrderData } from "../pages/place-order/place-order.data";
import { PlaceOrderMethods } from "../pages/place-order/place-order.methods";
import { ProductsDetailsMethods } from "../pages/product-details/product-details.methods";
import { ThankYouForYouPurchaseMethods } from "../pages/thank-you-for-you-purchase/thank-you-for-you-purchase.methods";
import { Logger } from "../util/logger";

const product = 'Samsung galaxy s6'

describe(CommonPageData.testSuite.catalalogoYCompras, () =>{
    it('Navegación por categorías', ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.ClickOnLoginOption();
        Logger.subStep('Completar todos los campos obligatorios con información válida')
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.validCredentials.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.ClickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnMonitorsOption();
        Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada.')
        HomeMethods.verifyProductDisplayed('Apple monitor 24')
        HomeMethods.verifyProductDisplayed('ASUS Full HD')
    })
    it('Agregar producto al carrito', ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.ClickOnLoginOption();
        Logger.subStep('Completar todos los campos obligatorios con información válida')
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.validCredentials.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.ClickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnPhonesOption();

        Logger.stepNumber(4)
        Logger.step('Hacer clic en un producto específico.')
        HomeMethods.clickOnProductLink(product);

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto.')
        ProductsDetailsMethods.verifyProductDetailPageDisplay();

        Logger.stepNumber(6)
        Logger.step('Hacer clic en el botón "Add to cart".')
        ProductsDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito')
        ProductsDetailsMethods.verifiProductAddedMessage();
        CommonPageMethods.clickOnCartOptions();
        CartMethods.verifyProductAdded(product);
    })

    it('Realizar una compra', ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.ClickOnLoginOption();
        Logger.subStep('Completar todos los campos obligatorios con información válida')
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.validCredentials.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.ClickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnPhonesOption();

        Logger.stepNumber(4)
        Logger.step('Hacer clic en un producto específico.')
        HomeMethods.clickOnProductLink(product);

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto.')
        ProductsDetailsMethods.verifyProductDetailPageDisplay();

        Logger.stepNumber(6)
        Logger.step('Hacer clic en el botón "Add to cart".')
        ProductsDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito')
        ProductsDetailsMethods.verifiProductAddedMessage();
        CommonPageMethods.clickOnCartOptions();
        CartMethods.verifyProductAdded(product);
        

        Logger.stepNumber(8)
        Logger.step('Hacer clic an la opción "Cart" en la barra de navegación.')
        CommonPageMethods.clickOnCartOptions();
        
        Logger.stepNumber(9)
        Logger.verification('Verificar que se muestra la página del carrito de compras.')
        CartMethods.verifyCartPageIsShown();

        Logger.stepNumber(10)
        Logger.step('Hacer clic en el botón "Place Order".')
        CartMethods.clickOnButtonPlaceOrder

        Logger.stepNumber(11)
        Logger.step('Completar los campos obligatorios en la página de información de envío.')
        PlaceOrderMethods.insertOrderInformation(PlaceOrderData.testData);

        Logger.stepNumber(12)
        Logger.step('Hacer clic en el botón "Purchase".')
        PlaceOrderMethods.clickOnPurchaseButton();

        Logger.stepNumber(13)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y se redirige al usuario a la página de inicio.')
        ThankYouForYouPurchaseMethods.verifiGreenCheckMarkisDisplayed();
        cy.wait(3000)
        ThankYouForYouPurchaseMethods.clikOnOkButton();
        HomeMethods.verifyHomePageIsShown();

    })

})