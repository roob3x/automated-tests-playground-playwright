const { expect } = require('@playwright/test');

class BasePage {
    constructor(page) {
        this.page = page;
    }

    getLocator(target) {
        if (!target) {
            throw new Error('Elemento/seletor nao foi definido.');
        }

        return typeof target === 'string' ? this.page.locator(target) : target;
    }

    async navigate(url = '') {
        await this.page.goto(url);
    }

    async click(selector) {
        const locator = this.getLocator(selector);
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    async fill(selector, value) {
        const locator = this.getLocator(selector);
        await locator.waitFor({ state: 'visible' });
        await locator.fill(value);
    }

    async selectOption(selector, value) {
        const locator = this.getLocator(selector);
        await locator.waitFor({ state: 'attached' });
        await locator.selectOption(value);
    }

    async getText(selector) {
        return await this.getLocator(selector).textContent();
    }

    async assertVisible(selector) {
        await expect(this.getLocator(selector)).toBeVisible({ timeout: 30_000 });
    }

    async assertTextContains(selector, expectedText) {
        await expect(this.getLocator(selector)).toContainText(expectedText);
    }

    async assertUrlContains(expectedPath) {
        await expect(this.page).toHaveURL(new RegExp(expectedPath));
    }
}

module.exports = BasePage;
