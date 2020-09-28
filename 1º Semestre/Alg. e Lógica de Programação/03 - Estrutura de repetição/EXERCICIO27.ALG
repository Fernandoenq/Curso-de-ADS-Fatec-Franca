Algoritmo "exercicio27"

Var

   hora: inteiro

Inicio
      //Entradas
      escreva("Digite a hora atual: ")
      leia(hora)
      
      //Processamento
      Se (hora > 5) e (hora < 12) entao
         escreval("Bom dia! Flor do dia")
      senao
         Se (hora > 12) e (hora <= 18) entao
            escreval("Boa tarde!")
         senao
            Se (hora >= 19) e (hora <= 23) entao
               escreval("Boa noite!")
            senao
               escreval("Vá dormir!")
            fimse
         fimse
      fimse
      
      //Saídas


Fimalgoritmo