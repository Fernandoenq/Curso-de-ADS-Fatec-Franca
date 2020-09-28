Algoritmo "exercicio29"

Var

   min1, min2: inteiro
   horas: real

Inicio
      //Entradas
      escreva("Digite os minutos: ")
      leia(min1)
      escreval()
      
      //Processamento
      min2 <- min1 % 60
      horas <- min1 \ 60
      
      
      //Saídas
      escreval(horas, " horas", min2, " minutos")

Fimalgoritmo