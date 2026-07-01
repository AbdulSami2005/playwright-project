import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class ProductsPage {
    constructor(page) {
        this.page = page;
        this.title = page.locator('.title');
        this.productList = page.locator('.inventory_item');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
    }

    async getTitleText() {
        return await this.title.textContent();
    }

    async getProductCount() {
        return await this.productList.count();
    }

    async addProductToCart(productName) {
        await test.step(`Add product: ${productName}`, async () => {
            const addButton = this.page.locator(`[data-test="add-to-cart-${productName.toLowerCase().replace(/\s+/g, '-').replace(/[().]/g, '')}"]`);
            await addButton.click();
            await attachStepScreenshot(this.page, `Added: ${productName}`);
        });
    }

    async addProductToCartByIndex(index) {
        await test.step(`Add product at index: ${index}`, async () => {
            const addButton = this.page.locator('.inventory_item').nth(index).locator('button');
            await addButton.click();
            await attachStepScreenshot(this.page, `Added product index: ${index}`);
        });
    }

    async getCartCount() {
        const count = await this.cartBadge.textContent().catch(() => '0');
        return count;
    }

    async clickCart() {
        await this.cartLink.click();
        await attachStepScreenshot(this.page, 'Cart page opened');
    }

    async clickMenu() {
        await this.menuButton.click();
    }

    async clickLogout() {
        await this.logoutLink.click();
    }

    async logout() {
        await test.step('Logout from application', async () => {
            await this.clickMenu();
            await this.page.waitForTimeout(500);
            await this.clickLogout();
            await attachStepScreenshot(this.page, 'After logout');
        });
    }

    async getProductPrice(productName) {
        const priceLocator = this.page.locator('.inventory_item_name', { hasText: productName }).locator('..').locator('.inventory_item_price');
        return await priceLocator.textContent();
    }

    async sortProducts(option) {
        await test.step(`Sort products by: ${option}`, async () => {
            const sortDropdown = this.page.locator('[data-test="product-sort-container"]');
            await sortDropdown.selectOption(option);
            await attachStepScreenshot(this.page, `Sorted by: ${option}`);
        });
    }
}

export default ProductsPage;
