Algoritmo "exercicio24"

Var

      empresa, heroi: caractere

Inicio
      //Entradas
      escreval("Você é fã de Marvel ou DC?")
      leia(empresa)
      escreval()
      
      //Processamento
      Se empresa = "Marvel" entao
         escreval("Escolha um |Capitão América| ou |Homem de Ferro|")
         leia(heroi)
         escreval()
      senao
         escreval("Escolha um |Batman| ou |Superman|")
         leia(heroi)
         escreval()
      fimse
      
      //Saída
      escreval("O herói escolhido foi: ", heroi)



Fimalgoritmo