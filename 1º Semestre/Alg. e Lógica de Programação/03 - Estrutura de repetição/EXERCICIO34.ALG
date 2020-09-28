Algoritmo "exercicio34"


Var

   i, num, result: inteiro

Inicio
   //Entradas
   escreva("Digite um número: ")
   leia(num)
   escreval()

   result <- num
   
   //Processamento
   para i de num-1 até 2 passo -1 faca
        result <- result * i
        escreval(result)
        escreval()
   fimpara
   
   //Saídas
   escreval("O fatorial de",num, " é: ",result)

Fimalgoritmo