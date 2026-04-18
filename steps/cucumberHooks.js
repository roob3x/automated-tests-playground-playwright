require('dotenv').config();

const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../pages/LoginPage');

setDefaultTimeout(60 * 1000);

Before(async function () {
    const baseURL = process.env.BASE_URL;

    if (!baseURL) {
        throw new Error('A variavel BASE_URL nao foi encontrada no arquivo .env.');
    }

    this.browser = await chromium.launch({
        headless: false,
        slowMo: 200,
    });
    this.context = await this.browser.newContext({
        baseURL,
    });
    this.page = await this.context.newPage();
    this.page.setDefaultTimeout(30 * 1000);

    try {
        await this.page.goto(baseURL, { waitUntil: 'domcontentloaded' });
    } catch (error) {
        throw new Error(
            `Nao foi possivel abrir ${baseURL}. Verifique se a aplicacao esta em execucao antes do teste. Detalhe: ${error.message}`
        );
    }

    this.loginPage = new LoginPage(this.page);
});

After(async function () {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
});
