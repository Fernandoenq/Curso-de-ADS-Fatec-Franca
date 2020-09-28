Algoritmo "binarytodecimal"


Var

   b, soma, bin: real
   i: inteiro


Inicio
      escreva("Digite um número Binário: ")
      leia(bin)
      escreval()
      soma <- 0

      para i <- 7 ate 0 passo -1 faca
           b <- bin - 10^i
           se b >= 0 entao
              soma <- soma + 2^i
              bin <- bin - 10^i
           fimse
      fimpara

      escreval("O número decimal é:",soma)


Fimalgoritmo