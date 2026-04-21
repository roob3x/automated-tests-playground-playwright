# language: pt
@transferencia
Funcionalidade: Transferencia
    Como usuario da aplicacao
    Quero realizar transferencia de valores
    Para realizar pagamentos a terceiros


    Esquema do Cenario: Realizar transferencia com sucesso
        Dado que esteja logado
        Quando realizar transferencia de <valor>
        Entao validar que a transferencia foi realizada com sucesso

        Exemplos:
            | valor  |
            | 10,00  |
            | 9,99   |

