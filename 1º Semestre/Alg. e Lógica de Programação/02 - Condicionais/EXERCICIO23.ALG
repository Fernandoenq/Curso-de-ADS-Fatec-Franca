Algoritmo "exercicio23"

Var

   febre, manchas, dores: caractere

Inicio
      //Entradas
      escreval("Você está com febre alta?")
      leia(febre)
      escreval()
      escreval("Você tem manchas na pele?")
      leia(manchas)
      escreval()
      escreval("Você está com dores no corpo?")
      leia(dores)
      escreval()
      
      //Processamento
      Se (febre = "sim") e (dores = "sim") entao
         escreval("Você está com Dengoso. Mimado demais")
      senao
         Se (manchas = "sim") e (dores = "sim") entao
            escreval("Você tá zikado demais. Vai se Benzer")
         senao
            Se (febre = "sim") e (manchas = "sim") entao
               escreval("Tá amarrado seu Chikungunyaento")
            senao
               escreval("Tá com a saúde de um atleta bb")
            fimse
         fimse
      fimse
      
      //Saída




Fimalgoritmo