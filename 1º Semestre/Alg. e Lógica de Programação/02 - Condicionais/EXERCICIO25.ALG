Algoritmo "exercicio25"

Var

   time1, time2: caractere
   gols1, gols2: inteiro

Inicio
      //Entradas
      escreval("Quais Times vão jogar?")
      escreval("========================")
      escreval()
      escreval("Time 1: ")
      leia(time1)
      escreval()
      escreval("Time 2: ")
      leia(time2)
      escreval()
      limpatela
      escreval("Quantos gols o ", time1, " fez?")
      leia(gols1)
      escreval()
      escreval("Quantos gols o ", time2, " fez?")
      leia(gols2)
      escreval()
      
      //Processamento

      
      //Saída
      Se gols1 > gols2 entao
         escreval("O time vencedor é ", time1)
         escreval("A partida ficou ", gols1, " X ", gols2)
      senao
         escreval("O time vencedor é ", time2)
         escreval("A partida ficou ", gols2, " X ",gols1)
      fimse



Fimalgoritmo