Algoritmo "exercicio21"

Var

   volta1, volta2, volta3: real

Inicio
      //Entradas
      escreval("Digite o tempo de 1ª volta: ")
      leia(volta1)
      escreval()
      escreval("Digite o tempo de 2ª volta: ")
      leia(volta2)
      escreval()
      escreval("Digite o tempo de 3ª volta: ")
      leia(volta3)
      escreval()
      
      //Processamento
      
      Se (volta1 < volta2) ou (volta1 < volta3) entao
         escreval("O menor tempo foi da 1ª volta ", volta1, " tá voando mlk")
      senao
         Se volta2 < volta3 entao
            escreval("O menor tempo foi da 2ª volta ", volta2, " tá voando mlk")
         senao
            escreval("O menor tempo foi da 3ª volta ", volta3, " tá voando mlk")
         fimse
      fimse


Fimalgoritmo