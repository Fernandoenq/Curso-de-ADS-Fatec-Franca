Algoritmo "exercicio28"

Var

   horaI, minI, horaF, minF, duracao: inteiro

Inicio
      //Entradas
      escreva("Digite a hora que começa a aula: ")
      leia(horaI)
      escreval()
      escreva("Digite os minutos: ")
      leia(minI)
      limpatela
      escreva("Digite a hora que terminou a aula: ")
      leia(horaF)
      escreval()
      escreva("Digite os minutos: ")
      leia(minF)
      escreval()
      
      //Processamento
      horaI <- horaI * 60 + minI
      horaF <- horaF * 60 + minF
      duracao <- horaF - horaI
      
      
      //Saídas
      escreval("A aula durou",duracao, " minutos")

Fimalgoritmo