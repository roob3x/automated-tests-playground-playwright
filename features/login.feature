# language: pt
@login
Funcionalidade: Login
  Como usuario da aplicacao
  Quero informar minhas credenciais
  Para acessar a area autenticada do sistema

  Cenario: Realizar login com sucesso
    Dado que o usuario acessa a pagina de login
    Quando informar o usuario "julio.lima" e a senha "123456"
    E clicar no botao de login
    Entao deve visualizar a mensagem "Realizar Transferência"
