Algoritmo "exercicio4"

Var
// Seção de Declarações das variáveis 
// caractere(texto), inteiro, real (numeros com casas decimais),
// logico (verdadeiro/falso)
preco, valorTotal, totalDescontado, desconto, valorParcela: real
qt, percentual, qtParcelas: inteiro


Inicio
      Escreva("Qual o valor do produto? R$")
      leia(preco)
      
      Escreva("Quantos você comprou? ")
      leia(qt)
      
      Escreva("Qual percentual de desconto? ")
      leia(percentual)

      Escreva("Qual quantidade de parcelas? ")
      leia(qtParcelas)
      
      
      valorTotal <- preco * qt
      desconto <- (valorTotal * percentual) / 100
      totalDescontado <- valorTotal - desconto
      valorParcela <- totalDescontado / qtParcelas
      
      
      
      Escreval("O valor total da compra é de: R$",valorTotal)
      
      Escreval("O valor total com desconto é de: R$",totalDescontado)

      Escreval("O valor da parcela vai ficar: ",qtParcelas, "X de R$",valorParcela)
      
      


Fimalgoritmo