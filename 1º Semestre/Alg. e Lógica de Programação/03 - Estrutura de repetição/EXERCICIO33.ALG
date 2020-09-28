Algoritmo "exercicio33"


Var

   i, x, n, result: inteiro

Inicio
   //Entradas
   escreva("Digite o valor de n (deve ser maior que 1 e inteiro): ")
   leia(n)
   escreval()
   escreva("Digite o valor de x (deve ser maior igual a 2 e inteiro: ")
   leia(x)
   escreval()
   
   result <- x
   
   //Processamento
   para i de 2 ate n faca
        result <- result * x
        escreval(result)
   fimpara

   escreval()
   escreval(x," ^",n, " = ", result)


   
   
   //Saídas

Fimalgoritmo