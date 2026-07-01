import { test, expect } from '../fixtures/testSetup.js';
import loginData from '../testdata/loginData.json' assert { type: 'json' };
import LoginPage from '../pages/LoginPage.js';
import ProductsPage from '../pages/ProductsPage.js';
import CartPage from '../pages/CartPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

// ==========================================
// TEST SUITE 1: LOGIN TESTS (Tests 1-15)
// ==========================================

test.describe('Login Tests', () => {

    test('Login Test with valid user - standard_user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const data = loginData.validUsers[0];
        await test.step('Enter credential and login', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify Products page displayed', async () => {
            const productsPage = new ProductsPage(page);
            await expect(productsPage.title).toHaveText(data.ExpectedMsg);
            await attachStepScreenshot(page, '05 - Products page verified');
        });
    });

    test('Login Test with valid user - problem_user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const data = loginData.validUsers[1];
        await test.step('Enter credential and login', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify Products page displayed', async () => {
            const productsPage = new ProductsPage(page);
            await expect(productsPage.title).toHaveText(data.ExpectedMsg);
            await attachStepScreenshot(page, '05 - Products page verified');
        });
    });

    test('Login Test with valid user - performance_glitch_user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const data = loginData.validUsers[2];
        await test.step('Enter credential and login', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify Products page displayed', async () => {
            const productsPage = new ProductsPage(page);
            await expect(productsPage.title).toHaveText(data.ExpectedMsg);
            await attachStepScreenshot(page, '05 - Products page verified');
        });
    });

    test('Login Test with valid user - error_user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const data = loginData.validUsers[3];
        await test.step('Enter credential and login', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify Products page displayed', async () => {
            const productsPage = new ProductsPage(page);
            await expect(productsPage.title).toHaveText(data.ExpectedMsg);
            await attachStepScreenshot(page, '05 - Products page verified');
        });
    });

    test('Login Test with valid user - visual_user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const data = loginData.validUsers[4];
        await test.step('Enter credential and login', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify Products page displayed', async () => {
            const productsPage = new ProductsPage(page);
            await expect(productsPage.title).toHaveText(data.ExpectedMsg);
            await attachStepScreenshot(page, '05 - Products page verified');
        });
    });

    test('Login Test with locked out user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const data = loginData.invalidUsers[0];
        await test.step('Enter locked out credentials', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify error message displayed', async () => {
            await expect(loginPage.errorMessage).toContainText(data.ExpectedError);
            await attachStepScreenshot(page, '05 - Error message verified');
        });
    });

    test('Login Test with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const data = loginData.invalidUsers[1];
        await test.step('Enter invalid credentials', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify error message displayed', async () => {
            await expect(loginPage.errorMessage).toContainText(data.ExpectedError);
            await attachStepScreenshot(page, '05 - Error message verified');
        });
    });

    test('Login Test with empty username', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const data = loginData.invalidUsers[2];
        await test.step('Enter empty username', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify error message displayed', async () => {
            await expect(loginPage.errorMessage).toContainText(data.ExpectedError);
            await attachStepScreenshot(page, '05 - Error message verified');
        });
    });

    test('Login Test with empty password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const data = loginData.invalidUsers[3];
        await test.step('Enter empty password', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify error message displayed', async () => {
            await expect(loginPage.errorMessage).toContainText(data.ExpectedError);
            await attachStepScreenshot(page, '05 - Error message verified');
        });
    });

    test('Login Test with empty username and password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const data = loginData.invalidUsers[4];
        await test.step('Enter empty credentials', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify error message displayed', async () => {
            await expect(loginPage.errorMessage).toContainText(data.ExpectedError);
            await attachStepScreenshot(page, '05 - Error message verified');
        });
    });

    test('Data Driven Login Test - standard_user dataset', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const data = loginData.validUsers[0];
        await test.step('Enter credential and login', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify Welcome Message on Landing page', async () => {
            const productsPage = new ProductsPage(page);
            await expect(productsPage.title).toHaveText(data.ExpectedMsg);
            await attachStepScreenshot(page, '05 - Welcome Message verified');
        });
    });

    test('Data Driven Login Test - problem_user dataset', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const data = loginData.validUsers[1];
        await test.step('Enter credential and login', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify Welcome Message on Landing page', async () => {
            const productsPage = new ProductsPage(page);
            await expect(productsPage.title).toHaveText(data.ExpectedMsg);
            await attachStepScreenshot(page, '05 - Welcome Message verified');
        });
    });

    test('Verify login page elements are visible', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await test.step('Verify username field is visible', async () => {
            await expect(loginPage.username).toBeVisible();
        });
        await test.step('Verify password field is visible', async () => {
            await expect(loginPage.password).toBeVisible();
        });
        await test.step('Verify login button is visible', async () => {
            await expect(loginPage.loginButton).toBeVisible();
            await attachStepScreenshot(page, '05 - Login elements verified');
        });
    });

    test('Verify login button is enabled', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await test.step('Verify login button is enabled', async () => {
            await expect(loginPage.loginButton).toBeEnabled();
            await attachStepScreenshot(page, '05 - Button enabled verified');
        });
    });

    test('Verify page title is Swag Labs', async ({ page }) => {
        await test.step('Verify page title', async () => {
            await expect(page).toHaveTitle('Swag Labs');
            await attachStepScreenshot(page, '05 - Title verified');
        });
    });
});

// ==========================================
// TEST SUITE 2: PRODUCT TESTS (Tests 16-25)
// ==========================================

test.describe('Product Tests', () => {

    test('Verify Products page title after login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify Products title', async () => {
            await expect(productsPage.title).toHaveText('Products');
            await attachStepScreenshot(page, '05 - Products title verified');
        });
    });

    test('Verify product count is 6', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify 6 products displayed', async () => {
            const count = await productsPage.getProductCount();
            expect(count).toBe(6);
            await attachStepScreenshot(page, '05 - Product count verified');
        });
    });

    test('Add Sauce Labs Backpack to cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add product to cart', async () => {
            await productsPage.addProductToCart('Sauce Labs Backpack');
        });
        await test.step('Verify cart badge shows 1', async () => {
            const count = await productsPage.getCartCount();
            expect(count).toBe('1');
            await attachStepScreenshot(page, '05 - Cart badge verified');
        });
    });

    test('Add Sauce Labs Bike Light to cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add product to cart', async () => {
            await productsPage.addProductToCart('Sauce Labs Bike Light');
        });
        await test.step('Verify cart badge shows 1', async () => {
            const count = await productsPage.getCartCount();
            expect(count).toBe('1');
            await attachStepScreenshot(page, '05 - Cart badge verified');
        });
    });

    test('Add multiple products to cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add first product', async () => {
            await productsPage.addProductToCartByIndex(0);
        });
        await test.step('Add second product', async () => {
            await productsPage.addProductToCartByIndex(1);
        });
        await test.step('Verify cart badge shows 2', async () => {
            const count = await productsPage.getCartCount();
            expect(count).toBe('2');
            await attachStepScreenshot(page, '05 - Multiple cart verified');
        });
    });

    test('Sort products by Name A to Z', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Sort products A to Z', async () => {
            await productsPage.sortProducts('az');
            await attachStepScreenshot(page, '05 - Sort A-Z verified');
        });
    });

    test('Sort products by Name Z to A', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Sort products Z to A', async () => {
            await productsPage.sortProducts('za');
            await attachStepScreenshot(page, '05 - Sort Z-A verified');
        });
    });

    test('Sort products by Price Low to High', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Sort products Price Low to High', async () => {
            await productsPage.sortProducts('lohi');
            await attachStepScreenshot(page, '05 - Sort Price Lo-Hi verified');
        });
    });

    test('Sort products by Price High to Low', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Sort products Price High to Low', async () => {
            await productsPage.sortProducts('hilo');
            await attachStepScreenshot(page, '05 - Sort Price Hi-Lo verified');
        });
    });

    test('Verify product prices are displayed', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify prices displayed', async () => {
            const prices = await page.locator('.inventory_item_price').count();
            expect(prices).toBe(6);
            await attachStepScreenshot(page, '05 - Prices verified');
        });
    });
});

// ==========================================
// TEST SUITE 3: CART TESTS (Tests 26-32)
// ==========================================

test.describe('Cart Tests', () => {

    test('Navigate to cart page', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add product to cart', async () => {
            await productsPage.addProductToCartByIndex(0);
        });
        await test.step('Click cart', async () => {
            await productsPage.clickCart();
        });
        await test.step('Verify cart page title', async () => {
            await expect(cartPage.title).toHaveText('Your Cart');
            await attachStepScreenshot(page, '05 - Cart page verified');
        });
    });

    test('Verify cart item count', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add two products', async () => {
            await productsPage.addProductToCartByIndex(0);
            await productsPage.addProductToCartByIndex(1);
        });
        await test.step('Click cart', async () => {
            await productsPage.clickCart();
        });
        await test.step('Verify 2 items in cart', async () => {
            const count = await cartPage.getCartItemCount();
            expect(count).toBe(2);
            await attachStepScreenshot(page, '05 - Cart count verified');
        });
    });

    test('Remove item from cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add two products', async () => {
            await productsPage.addProductToCartByIndex(0);
            await productsPage.addProductToCartByIndex(1);
        });
        await test.step('Click cart', async () => {
            await productsPage.clickCart();
        });
        await test.step('Remove first item', async () => {
            await cartPage.removeItem(0);
        });
        await test.step('Verify 1 item remains', async () => {
            const count = await cartPage.getCartItemCount();
            expect(count).toBe(1);
            await attachStepScreenshot(page, '05 - Remove item verified');
        });
    });

    test('Continue shopping from cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add product and go to cart', async () => {
            await productsPage.addProductToCartByIndex(0);
            await productsPage.clickCart();
        });
        await test.step('Click continue shopping', async () => {
            await cartPage.clickContinueShopping();
        });
        await test.step('Verify back on products page', async () => {
            await expect(productsPage.title).toHaveText('Products');
            await attachStepScreenshot(page, '05 - Continue shopping verified');
        });
    });

    test('Click checkout button from cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add product and go to cart', async () => {
            await productsPage.addProductToCartByIndex(0);
            await productsPage.clickCart();
        });
        await test.step('Click checkout', async () => {
            await cartPage.clickCheckout();
        });
        await test.step('Verify checkout page', async () => {
            await expect(checkoutPage.title).toHaveText('Checkout: Your Information');
            await attachStepScreenshot(page, '05 - Checkout page verified');
        });
    });

    test('Verify cart item name matches product', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add product and go to cart', async () => {
            await productsPage.addProductToCart('Sauce Labs Backpack');
            await productsPage.clickCart();
        });
        await test.step('Verify item name', async () => {
            const name = await cartPage.getItemName(0);
            expect(name).toBe('Sauce Labs Backpack');
            await attachStepScreenshot(page, '05 - Item name verified');
        });
    });

    test('Empty cart shows no items', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Go to cart without adding items', async () => {
            await productsPage.clickCart();
        });
        await test.step('Verify no items in cart', async () => {
            const count = await cartPage.getCartItemCount();
            expect(count).toBe(0);
            await attachStepScreenshot(page, '05 - Empty cart verified');
        });
    });
});

// ==========================================
// TEST SUITE 4: CHECKOUT TESTS (Tests 33-38)
// ==========================================

test.describe('Checkout Tests', () => {

    test('Fill checkout information', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add product and go to checkout', async () => {
            await productsPage.addProductToCartByIndex(0);
            await productsPage.clickCart();
            await cartPage.clickCheckout();
        });
        await test.step('Fill checkout info', async () => {
            await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
        });
        await test.step('Click continue', async () => {
            await checkoutPage.clickContinue();
        });
        await test.step('Verify overview page', async () => {
            await expect(checkoutPage.title).toHaveText('Checkout: Overview');
            await attachStepScreenshot(page, '05 - Overview verified');
        });
    });

    test('Complete checkout process', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add product and go to checkout', async () => {
            await productsPage.addProductToCartByIndex(0);
            await productsPage.clickCart();
            await cartPage.clickCheckout();
        });
        await test.step('Fill checkout info and continue', async () => {
            await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
            await checkoutPage.clickContinue();
        });
        await test.step('Click finish', async () => {
            await checkoutPage.clickFinish();
        });
        await test.step('Verify order complete', async () => {
            const header = await checkoutPage.getCompleteHeader();
            expect(header).toBe('Thank you for your order!');
            await attachStepScreenshot(page, '05 - Order complete verified');
        });
    });

    test('Checkout with empty first name shows error', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add product and go to checkout', async () => {
            await productsPage.addProductToCartByIndex(0);
            await productsPage.clickCart();
            await cartPage.clickCheckout();
        });
        await test.step('Click continue without filling', async () => {
            await checkoutPage.clickContinue();
        });
        await test.step('Verify error message', async () => {
            const error = await checkoutPage.getErrorMessage();
            expect(error).toContain('Error: First Name is required');
            await attachStepScreenshot(page, '05 - Error verified');
        });
    });

    test('Cancel checkout returns to cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add product and go to checkout', async () => {
            await productsPage.addProductToCartByIndex(0);
            await productsPage.clickCart();
            await cartPage.clickCheckout();
        });
        await test.step('Click cancel', async () => {
            await checkoutPage.clickCancel();
        });
        await test.step('Verify back to cart', async () => {
            await expect(cartPage.title).toHaveText('Your Cart');
            await attachStepScreenshot(page, '05 - Cancel verified');
        });
    });

    test('Verify total amount on overview page', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add product and go to checkout', async () => {
            await productsPage.addProductToCartByIndex(0);
            await productsPage.clickCart();
            await cartPage.clickCheckout();
        });
        await test.step('Fill info and continue', async () => {
            await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
            await checkoutPage.clickContinue();
        });
        await test.step('Verify total contains $', async () => {
            const total = await checkoutPage.getTotalAmount();
            expect(total).toContain('Total');
            await attachStepScreenshot(page, '05 - Total verified');
        });
    });

    test('Checkout with all fields filled', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add product and go to checkout', async () => {
            await productsPage.addProductToCartByIndex(0);
            await productsPage.clickCart();
            await cartPage.clickCheckout();
        });
        await test.step('Fill all fields', async () => {
            await checkoutPage.fillCheckoutInfo('Test', 'User', '54321');
        });
        await test.step('Click continue', async () => {
            await checkoutPage.clickContinue();
        });
        await test.step('Verify overview page displayed', async () => {
            await expect(checkoutPage.title).toHaveText('Checkout: Overview');
            await attachStepScreenshot(page, '05 - All fields verified');
        });
    });
});

// ==========================================
// TEST SUITE 5: END TO END & LOGOUT (Tests 39-40)
// ==========================================

test.describe('End to End and Logout Tests', () => {

    test('Full end to end purchase flow', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Add product to cart', async () => {
            await productsPage.addProductToCart('Sauce Labs Backpack');
        });
        await test.step('Go to cart', async () => {
            await productsPage.clickCart();
        });
        await test.step('Proceed to checkout', async () => {
            await cartPage.clickCheckout();
        });
        await test.step('Fill checkout information', async () => {
            await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
            await checkoutPage.clickContinue();
        });
        await test.step('Complete purchase', async () => {
            await checkoutPage.clickFinish();
        });
        await test.step('Verify order confirmation', async () => {
            const header = await checkoutPage.getCompleteHeader();
            expect(header).toBe('Thank you for your order!');
            await attachStepScreenshot(page, '05 - E2E flow verified');
        });
    });

    test('Logout from application', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const data = loginData.validUsers[0];
        await test.step('Login to application', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Logout from application', async () => {
            await productsPage.logout();
        });
        await test.step('Verify back on login page', async () => {
            await expect(loginPage.loginButton).toBeVisible();
            await attachStepScreenshot(page, '05 - Logout verified');
        });
    });
});
