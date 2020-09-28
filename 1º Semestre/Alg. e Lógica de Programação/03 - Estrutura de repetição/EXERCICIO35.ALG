Algoritmo "exercicio35"


Var

   num1, num2, i: inteiro

Inicio
   //Entradas
   escreva("Digite um número: ")
   leia(num1)
   escreval()
   escreva("Digite outro número: ")
   leia(num2)
   
   //Processamento

   Se num1 < num2 entao
      para i de num1 ate num2 faca
           escreva(i)
      fimpara
   senao
      para i de num1 ate num2 passo -1 faca
           escreva(i)
      fimpara
   fimse
   
   //Saídas


Fimalgoritmo