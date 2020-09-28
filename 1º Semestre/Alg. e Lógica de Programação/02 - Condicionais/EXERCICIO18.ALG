Algoritmo "EXERCICIO18"

Var

      valor,desconto,valorTotal: real
      quant: inteiro

Inicio

      //entrada
      escreva("Digite o valor do produto: R$ ")
      leia(valor)
      escreval()
      escreva("Digite a quantidade do produto: R$ ")
      leia(quant)
      escreval()
      
      //processamento
      valorTotal <- valor * quant
      desconto <- valorTotal - valorTotal * 10 / 100
      
      
      //saída
      se quant >= 5 então
         escreval("O valor total com desconto de 10% é de: R$",desconto)
      senao
         escreval("O valor total do produto é de: R$ ",valorTotal)
      fimse

Fimalgoritmo