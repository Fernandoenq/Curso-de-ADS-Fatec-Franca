Algoritmo "exercicio22"

Var

   nota1, nota2, faltas, media: real

Inicio
      //Entradas
      escreval("Digite a 1ª nota:")
      leia(nota1)
      escreval()
      escreval("Digite a 2ª nota:")
      leia(nota2)
      escreval()
      escreval("Digite a quantidade de faltas:")
      leia(faltas)
      escreval()
      
      
      //Processamento
      media <- (nota1 + nota2) / 2
      
      //Saída
      Se (media >= 6) e (faltas <= 20) entao
         escreval("Você foi aprovado. Parabéns neném ", media)
      senao
         escreval("Você foi reprovado!")
      fimse



Fimalgoritmo