const transferElements = (page) => ({
    originAccountInput: page.locator('#conta-origem'),
    destinyAccountInput: page.locator('#conta-destino'),
    valueInput: page.locator('#valor'),
    transferButton: page.getByRole('button', { name: 'Transferir' }),
    transferSucessMsg: page.getByText('Transferência realizada!')
});

module.exports = transferElements;
