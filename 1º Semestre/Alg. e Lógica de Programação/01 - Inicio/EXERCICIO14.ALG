Algoritmo "exercicio13"

Var

      km, etanol, gasolina, valorEtanol, valorGasolina: real

Inicio

      //entrada
      escreval("Qual a distância a ser percorrida?")
      leia(km)
      escreval("Qual o valor do Etanol? R$ ")
      leia(etanol)
      escreval("Qual o valor da Gasolina? R$ ")
      leia(gasolina)
      
      //processamento
      valorEtanol <- km / 9 * etanol
      valorGasolina <- km / 11 * gasolina

      
      
      //saída
      escreval("O valor se abastecer com Etanol é de: R$",valorEtanol)
      escreval()
      escreval("O valor se abastecer com Gasolina é de: R$",valorGasolina)
      

Fimalgoritmo