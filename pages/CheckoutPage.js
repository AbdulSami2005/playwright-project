import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.title = page.locator('.title');
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
        this.cancelButton = page.locator('#cancel');
        this.completeHeader = page.locator('.complete-header');
        this.summaryTotal = page.locator('.summary_total_label');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async getTitleText() {
        return await this.title.textContent();
    }

    async fillCheckoutInfo(firstName, lastName, postalCode) {
        await test.step('Fill checkout information', async () => {
            await this.firstName.fill(firstName);
            await this.lastName.fill(lastName);
            await this.postalCode.fill(postalCode);
            await attachStepScreenshot(this.page, 'Checkout info filled');
        });
    }

    async clickContinue() {
        await test.step('Click continue button', async () => {
            await this.continueButton.click();
            await attachStepScreenshot(this.page, 'Overview page opened');
        });
    }

    async clickFinish() {
        await test.step('Click finish button', async () => {
            await this.finishButton.click();
            await attachStepScreenshot(this.page, 'Order completed');
        });
    }

    async clickCancel() {
        await this.cancelButton.click();
    }

    async getCompleteHeader() {
        return await this.completeHeader.textContent();
    }

    async getTotalAmount() {
        return await this.summaryTotal.textContent();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }
}

export default CheckoutPage;
