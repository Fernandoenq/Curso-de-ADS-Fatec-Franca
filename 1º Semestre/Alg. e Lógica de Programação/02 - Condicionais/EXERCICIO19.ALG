Algoritmo "EXERCICIO19"

Var

      altura, peso, IMC: real

Inicio

      //entrada
      escreva("Digite a sua altura: ")
      leia(altura)
      escreval()
      escreva("Digite o seu peso: ")
      leia(peso)
      escreval()
      
      
      //processamento
      IMC <- peso / (altura*altura)
      
      
      //saída
      se IMC <= 25 entao
         escreval("Você está com peso ideal, partiu churrasco")
      senao
         escreval("Você está acima do peso, comece a dieta!")
      fimse
Fimalgoritmo