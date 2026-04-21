const BasePage = require('./BasePage');
const transferElements = require('../elements/TransferElements');

class TransferPage extends BasePage {
    constructor(page) {
        super(page);
        this.elements = transferElements(page);
    }

    async selectAccountByPartialText(selector, accountName) {
        const locator = this.getLocator(selector);
        await locator.waitFor({ state: 'attached' });

        const optionValue = await locator.evaluate((select, expectedAccountName) => {
            const options = Array.from(select.options);
            const matchedOption = options.find((option) =>
                option.textContent.includes(expectedAccountName)
            );

            return matchedOption?.value ?? null;
        }, accountName);

        if (!optionValue) {
            throw new Error(`Conta nao encontrada para selecao: ${accountName}`);
        }

        await locator.evaluate((select, value) => {
            select.value = value;
            select.dispatchEvent(new Event('input', { bubbles: true }));
            select.dispatchEvent(new Event('change', { bubbles: true }));
        }, optionValue);
    }

    async fillOriginAccount(originAccount) {
        await this.selectAccountByPartialText(this.elements.originAccountInput, originAccount);
    }

    async fillDestinyAcoount(destinyAccount) {
        await this.selectAccountByPartialText(this.elements.destinyAccountInput, destinyAccount);
    }
    
    async fillTransferValue(value) {
        await this.fill(this.elements.valueInput, String(value));
    }

    async submitTransfer() {
        await this.click(this.elements.transferButton);
    }

    async fillTransfer(originAccount, destinyAccount, value) {
        await this.fillOriginAccount(originAccount);
        await this.fillDestinyAcoount(destinyAccount);
        await this.fillTransferValue(value);
    }

    async assertTransferSucess(expectedMessge = 'Transferência realizada!') {
        await this.assertVisible(this.elements.transferSucessMsg);
        await this.assertTextContains(this.elements.transferSucessMsg, expectedMessge);
    }
}

module.exports = TransferPage;
