# language: pt
@transferencia
Funcionalidade: Transferencia
    Como usuario da aplicacao
    Quero realizar transferencia de valores
    Para realizar pagamentos a terceiros


    Cenario: Realizar transferencia com sucesso
        Dado que esteja logado
        Quando realizar transferencia de 10,00
        Entao validar que a transferencia foi realizada com sucesso

