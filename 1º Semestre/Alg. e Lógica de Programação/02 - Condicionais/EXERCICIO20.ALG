Algoritmo "EXERCICIO20"

Var

      km, etanol, gasolina, valorE, valorG: real

Inicio

      //entrada
      escreva("Digite a distância da viagem: km")
      leia(km)
      escreval()
      escreva("Digite o valor do Etanol: R$ ")
      leia(etanol)
      escreval()
      escreva("Digite o valor do Gasolina: R$ ")
      leia(gasolina)
      escreval()
      
      //processamento
      valorE <- km / 9 * etanol
      valorG <- km / 11 * gasolina
      
      
      //saída
      escreval("O valor gasto em Etanol é de: R$ ",valorE:4:2)
      escreval()
      escreval("O valor gasto em Gasolina é de: R$ ",valorG:4:2)
      escreval()
      
      se valorE <= valorG entao
         escreval("Compensa abastacer com Etanol")
      senao
         escreval("Compensa abastecer com Gasolina")
      fimse
      
      
Fimalgoritmo