/*
    SELECTION SORT
    Trata-se de uma otimização do bubble sort, diminuindo drasticamente
    o número de trocas necessárias para fazer a ordenação.
    Isola um dos valores do vetor e procura pelo menor valor entre os
    restantes, promovendo a troca caso o primeiro valor seja maior que
    o segundo.
*/

let vetorzinho = [10, 33, 55, 22, 99, 66, 0]
let pass, comps, trocas

function selectionSort(vetor){
    pass = 0
    comps = 0
    trocas = 0
// loop pos-sel vai ate a penultima posição do vetor
    for(let posSel = 0; posSel < vetor.length - 1; posSel++){
        pass++
        
        let posMenor = posSel + 1

        // loop para procurar o menor valor no restaurante do vetor
        for(let i = posMenor + 1; i < vetor.length; i++){
            if(vetor[posMenor] > vetor[i]) posMenor = i
            comps++
        }

        //se o valor em posMenor for menor que o valor em posSel
        //efetua a troca
        comps++

        if(vetor[posSel] > vetor[posMenor]){
            [vetor [posSel], vetor[posMenor] ] = [vetor[posMenor], vetor[posSel]]
            trocas++

        }
    }

}

//pior casa
let nums = [99, 0, 11, 22, 33, 44, 55, 66 , 77, 88]

//melhor caso
let numss = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

selectionSort(vetorzinho)
console.log(vetorzinho)
console.log({pass, comps, trocas})

selectionSort(numss)
console.log(numss)
console.log({pass, comps, trocas})

import { nomes } from './data/nomes-desord.mjs'

console.time('Tempo de ordenação')
selectionSort(nomes)
console.timeEnd('Tempo de ordenação')
console.log(nomes)
console.log({pass, comps, trocas})