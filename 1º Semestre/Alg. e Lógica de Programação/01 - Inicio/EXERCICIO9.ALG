Algoritmo "exercicio9"

Var

   valorProduto, aVista, desconto, tresParcelas, juros, valorJuros, dezParcelas: real


Inicio

      //entrada
      escreval("Qual valor do produto: R$ ")
      leia(valorProduto)
      escreval()
      
      //processamento
      desconto <-  valorProduto * 10 / 100
      aVista <- valorProduto - desconto
      
      tresParcelas <- valorProduto / 3
      
      juros <- valorProduto * 5 / 100
      valorJuros <- valorProduto + juros
      dezParcelas <- valorJuros / 10
      
      
      //saída
      escreval("O valor à vista com 10% de desconto é de: R$",aVista)
      escreval()
      
      escreval("O valor sem desconto dividido em 3 parcelas é de: R$ ",tresParcelas:2:2)
      escreval()
      
      escreval("O valor com acréscimo de 10% é de: R$ ",valorJuros)
      escreval()
      
      escreval("O valor de cada parcela dividido em 10x é de: R$",dezParcelas)
      escreval()
      
      

Fimalgoritmo