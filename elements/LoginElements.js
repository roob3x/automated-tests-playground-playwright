const loginElements = (page) => ({
    usernameInput: page.getByRole('textbox', { name: 'Usuário' }),
    passwordInput: page.getByRole('textbox', { name: 'Senha' }),
    loginButton: page.getByRole('button', { name: 'Entrar' }),
    loggedUserMessage: page.getByRole('heading', { name: 'Realizar Transferência' }),
});

module.exports = loginElements;
