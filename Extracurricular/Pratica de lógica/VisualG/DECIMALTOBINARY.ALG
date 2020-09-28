Algoritmo "decimaltobinary"


Var

   i, x, resto: inteiro
   result, num: real

Inicio
      //Entradas
      escreva("Digite um número decimal: ")
      leia(num)
      escreval()
      
      //Processamento
      x <- 2

      para i <- 12 ate 0 passo -1 faca
           result <- x^i
           se num >= result entao
              num <- num - result
              resto <- 1
              escreva(resto)
           senao
              resto <- 0
              escreva(resto)
           fimse
      fimpara
      


Fimalgoritmo