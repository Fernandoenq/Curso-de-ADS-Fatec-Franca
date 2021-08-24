let comps

function buscaBinaria(vetor, fnComp){
    comps = 0
    let ini = 0
    let fim = vetor.length - 1

    while(fim >= ini){
        comps++
        //Math.floor() Retira as casas decimais de um numero
        let meio = Math.floor((ini + fim) / 2)

        switch(fnComp(vetor[meio])){
            case 0:     //Encontrando o valor de busca
                comps++
                return meio
            
            case 1:     //Valor de busca > valor do meio do vetor
                comps += 2
                ini = meio + 1
                break
            
            default: // -1, valor de busca < menor do meio do vetor
                comps += 2
                fim = meio -1

        }
    }


    //Se chegarmos até aqui, significa que fim < ini e, portanto,
    //o valor de busca não existe no vetor. Para indicar isso,
    //retornamos o valor convencional -1
    return -1
}

/*
    Na busca binária, a comparação entre o valor de busca e o valor que
    está no meio do vetor tem três possibilidades:
    1° -> ambos os valores são iguais
    2° -> O valor de busca é Maior que o valor do meio do vetor
    3° -> O valor de busca é Menor que o valor do meio do vetor

    Para usar a busca binária em um vetor de objetos, precisamos
    transferir a comparação para uma função externa que retorne um dos três valores:
    0 -> Caso ambos os valores sejam iguais
    1 -> Caso o valor de busca seja MAIOR que o valor do meio do vetor
    -1 -> Caso o valor de busca seja MENOR que o valor do meio do vetor
*/

function comparar(valorMeio, valorBusca = 'FERNANDO'){
    if(valorBusca === valorMeio.first_name) return 0
    else if(valorBusca > valorMeio.first_name) return 1
    else return -1
}

import { objNomes } from './data/vetor-obj-nomes.mjs'

console.log('Posiçã de first_name === Fernando', buscaBinaria(objNomes,comparar))
console.log('Comparações:', comps)

console.log('Posição de first_name === ULISSES', buscaBinaria(objNomes, 
    (valorMeio, valorBusca = 'ULISSES') => {
        if(valorBusca === valorMeio.first_name) return 0
        else if (valorBusca > valorMeio.first_name) return 1
        else return -1
    }
))
console.log('Comparações:', comps)

/* terminar
começa a função binária (ela tem dois valores)
    vetor com os nomes e o resultado da função comparar
        "comparar" começa com 2 valores valorMeio(valor do meio do vetor definido na função binária) e valorBusca(nome da pessoa)
            ela pega o valor meio e ve se o nome dentro do mio é igual ao procurado, se sim retorna 0, se maior retorna 0 e se nao retorna -1
função binária pega o tamanho do vetor e da pra variavel 'fim', e pega a metade desse damanho e da para o 'meio'

faz um switch  
    se o resultado da do comparar for
        0 = adiciona +1 no contador e retorn valor do valorMeio
        1 = adiciona +2 no contador e 

*/