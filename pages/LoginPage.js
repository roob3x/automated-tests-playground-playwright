const BasePage = require('./BasePage');
const loginElements = require('../elements/LoginElements');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.elements = loginElements(page);
    }

    async goTo() {
        await this.navigate(process.env.LOGIN_URL || '/');
        await this.assertVisible(this.elements.usernameInput);
    }

    async enterCredentials(username, password) {
        await this.fill(this.elements.usernameInput, username);
        await this.fill(this.elements.passwordInput, password);
    }

    async submitLogin() {
        await this.click(this.elements.loginButton);
    }

    async login(username, password) {
        await this.enterCredentials(username, password);
        await this.submitLogin();
    }

    async assertUserIsLoggedIn(expectedMessage = 'Realizar Transferência') {
        await this.assertVisible(this.elements.loggedUserMessage);
        await this.assertTextContains(this.elements.loggedUserMessage, expectedMessage);
    }

    async loginWithSuccess(username, password, expectedMessage) {
        await this.login(username, password);
        await this.assertUserIsLoggedIn(expectedMessage);
    }
}

module.exports = LoginPage;
