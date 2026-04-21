const { When, Then } = require('@cucumber/cucumber');

function normalizeBrazilianCurrency(value) {
    return value.replace(/\./g, '').replace(',', '.');
}

When('realizar transferencia de {string}', async function (value) {
    await this.transferPage.fillTransfer(
        'João da Silva',
        'Maria Oliveira',
        normalizeBrazilianCurrency(value)
    );
    await this.transferPage.submitTransfer();
});

When(
    /realizar transferencia de (\d+,\d{2})/,
    async function (value) {
        await this.transferPage.fillTransfer(
            'João da Silva',
            'Maria Oliveira',
            normalizeBrazilianCurrency(value)
        );
        await this.transferPage.submitTransfer();
    }
);

Then('validar que a transferencia foi realizada com sucesso', async function () {
    await this.transferPage.assertTransferSucess();
});
