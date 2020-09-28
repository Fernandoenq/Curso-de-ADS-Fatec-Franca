Algoritmo "exercicio8"

Var
   valorBoleto, multa, jurosDia, valorAtualizado: real
   dias, despesa: inteiro

Inicio

      //Entradas
      escreval("Digite o valor do boleto: R$")
      leia(valorBoleto)
      escreval()
      
      escreval("Digite os dias de atraso:")
      leia(dias)
      escreval()
      
      //Processamento
      multa <- valorBoleto * 2 / 100
      despesa <- 2
      jurosDia <- valorBoleto * (0.5 * dias) / 100
      valorAtualizado <- valorBoleto + multa + despesa + jurosDia

      
      //Saídas
      escreval("Valor da multa é de: R$", multa)
      escreval()
      escreval("Valor do juros ao dia é de: R$", jurosDia)
      escreval()
      escreval("O valor atualizado do boleto é de: R$",valorAtualizado)
      escreval()

      
      
      


Fimalgoritmo