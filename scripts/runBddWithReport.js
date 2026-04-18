require('dotenv').config();

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const generateCucumberReport = require('./generateCucumberReport');

const projectRoot = path.join(__dirname, '..');
const reportsRoot = path.join(projectRoot, 'reports', 'cucumber');
const jsonReportFile = path.join(reportsRoot, 'cucumber-report.json');

fs.rmSync(reportsRoot, { recursive: true, force: true });
fs.mkdirSync(reportsRoot, { recursive: true });

const cucumberBinary = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const extraArgs = process.argv.slice(2);

const result = spawnSync(
    cucumberBinary,
    [
        'cucumber-js',
        '--config',
        'cucumber.js',
        '--format',
        `json:${jsonReportFile}`,
        ...extraArgs,
    ],
    {
        cwd: projectRoot,
        stdio: 'inherit',
        env: process.env,
    }
);

if (fs.existsSync(jsonReportFile)) {
    generateCucumberReport();
    console.log(`\nRelatorio HTML gerado em: ${path.join(reportsRoot, 'html', 'index.html')}`);
} else {
    console.warn('\nNao foi possivel gerar o relatorio HTML porque o JSON do Cucumber nao foi criado.');
}

process.exit(result.status ?? 1);
