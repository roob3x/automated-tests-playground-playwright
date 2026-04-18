const path = require('path');
const reporter = require('multiple-cucumber-html-reporter');

function generateCucumberReport() {
    const reportsRoot = path.join(__dirname, '..', 'reports', 'cucumber');

    reporter.generate({
        jsonDir: reportsRoot,
        reportPath: path.join(reportsRoot, 'html'),
        reportName: 'Relatorio de Execucao BDD',
        pageTitle: 'Relatorio Cucumber',
        displayDuration: true,
        displayReportTime: true,
        hideMetadata: false,
        metadata: {
            browser: {
                name: 'chromium',
                version: 'local',
            },
            device: 'Ambiente local',
            platform: {
                name: process.platform,
                version: process.version,
            },
        },
        customData: {
            title: 'Execucao',
            data: [
                { label: 'Projeto', value: 'automated-tests-playgroud-playwright' },
                { label: 'Framework', value: 'Playwright + Cucumber' },
                { label: 'Base URL', value: process.env.BASE_URL || 'Nao informado' },
                { label: 'Gerado em', value: new Date().toLocaleString('pt-BR') },
            ],
        },
    });
}

module.exports = generateCucumberReport;
