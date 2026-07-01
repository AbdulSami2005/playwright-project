import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class CartPage {
    constructor(page) {
        this.page = page;
        this.title = page.locator('.title');
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('#checkout');
        this.continueShoppingButton = page.locator('#continue-shopping');
        this.removeButtons = page.locator('[data-test^="remove-"]');
    }

    async getTitleText() {
        return await this.title.textContent();
    }

    async getCartItemCount() {
        return await this.cartItems.count();
    }

    async clickCheckout() {
        await test.step('Click checkout button', async () => {
            await this.checkoutButton.click();
            await attachStepScreenshot(this.page, 'Checkout page opened');
        });
    }

    async clickContinueShopping() {
        await this.continueShoppingButton.click();
    }

    async removeItem(index) {
        await test.step(`Remove item at index: ${index}`, async () => {
            const removeBtn = this.cartItems.nth(index).locator('button');
            await removeBtn.click();
            await attachStepScreenshot(this.page, `Removed item: ${index}`);
        });
    }

    async getItemName(index) {
        return await this.cartItems.nth(index).locator('.inventory_item_name').textContent();
    }
}

export default CartPage;
