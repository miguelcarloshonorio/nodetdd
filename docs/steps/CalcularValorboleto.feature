Funcionalidade: Cálculo do valor a pagar.

Cenário: Boleto em dia.
    Dado Um boleto no valor de R$ 100,00
    E data de Vencimento igual a data atual.
    Quando o sistema calcular o valor do boleto 
    Então o valor será de R$ 100,00
        
Cenário: Boleto pago antecipadamente com desconto.
    Dado Um boleto no valor de R$ 100,00
    E com 5% de desconto para pagamento antes da data
    Mas data de Vencimento igual a data atual menos 5 dias.
    Quando o sistema calcular o valor do boleto 
    Então o valor a ser pago será de R$ 95,00
    E o valor do desconto será de R$ 5,00

Cenário: Boleto pago com atraso com multa.
    Dado Um boleto no valor de R$ 100,00
    Mas a multa por atraso é de 5%
    Mas data de Vencimento igual a data atual menos 5 dias.
    E com 5% de desconto para pagamento antes da data
    Quando o sistema calcular o valor do boleto 
    Então o valor a ser pago será de R$ 95,00
    E o valor da multa será de R$ 5,00

