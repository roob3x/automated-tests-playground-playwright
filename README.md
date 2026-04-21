# Automacao Web com Playwright e Cucumber

Estrutura base do projeto:

- `pages/BasePage.js`: classe base com acoes reutilizaveis e asserts.
- `elements/LoginElements.js`: mapeamento dos elementos da tela de login.
- `pages/LoginPage.js`: pagina de login com metodo de autenticacao.
- `features/login.feature`: cenarios em Gherkin.
- `steps/cucumberHooks.js`: hooks do Cucumber para inicializacao e encerramento do browser.
- `steps/loginSteps.js`: step definitions que consomem os metodos da `LoginPage`.

## Execucao

Instale as dependencias:

```bash
npm install
```

Execute os cenarios BDD:

```bash
npm run test:bdd
```
Obs: ajuste o TAG_NAME para o nome da tag que queira executar

Relatorio HTML apos a execucao:

```bash
reports/cucumber/html/index.html
```

## Variaveis opcionais

- `BASE_URL`: URL base da aplicacao.
- `LOGIN_URL`: rota da pagina de login. Ex.: `/login`
- `HEADLESS`: use `false` para executar com browser visivel.
