const { Given, When, Then } = require('@cucumber/cucumber');

Given('que o usuario acessa a pagina de login', async function () {
    await this.loginPage.goTo();
});

When(
    'informar o usuario {string} e a senha {string}',
    async function (username, password) {
        await this.loginPage.enterCredentials(username, password);
    }
);

When('clicar no botao de login', async function () {
    await this.loginPage.submitLogin();
});

Then('deve visualizar a mensagem {string}', async function (expectedMessage) {
    await this.loginPage.assertUserIsLoggedIn(expectedMessage);
});
