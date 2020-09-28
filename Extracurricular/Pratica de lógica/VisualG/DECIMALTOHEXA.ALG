Algoritmo "decimaltohexa"

Var

   i, t:inteiro
   num: real
   resto:vetor[1..8] de real

Inicio
      //Entradas

      escreva("Digite um número decimal: ")
      leia(num)
      t <- 0
      escreval()
      
      //Processamento
      
      para i <- 1 ate 8 faca
           resto[i] <- num % 16
           num <- int(num / 16)
      fimpara

      //Saídas
      para i <- 8 ate 1 passo -1 faca
              se (resto[i] <> 0) ou (t <> 0) entao
                 t <- 1
                 escolha(resto[i])
                    caso 10
                    escreva(" A")
                    caso 11
                    escreva(" B")
                    caso 12
                    escreva(" C")
                    caso 13
                    escreva(" D")
                    caso 14
                    escreva(" E")
                    caso 15
                    escreva(" F")
                    outrocaso
                    escreva(resto[i])
                 fimescolha
              fimse
      fimpara

Fimalgoritmo