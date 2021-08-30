/*
BUBBLE SORT
Percorre o conjunto de dados, comparando o elemento atual com o seu
sucessor e promovendo a troca entre eles caso o primeiro seja maior
que o segundo.
Faz isso em várias passadas, até, que, na última delas, nenhuma troca
tenha sido registrada.
*/

let pass, comps, trocas


function bubblesort(vetor){
    pass = 0
    comps = 0
    trocas = 0

    let trocou

    do{
        pass++

        trocou = false

        // Percurso for tradicional até a penúltima posição do vetor

        for(let i = 0; i < vetor.length - 1; i++){
            comps++
            if(vetor[i] > vetor[i + 1]){
                [vetor[i], vetor[i + 1] ] = [vetor[i + 1], vetor[i]]
                trocou = true
                trocas++
            }
        }
    } while(trocou)
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
let nums2 = [99, 88, 77, 66, 55, 44, 33, 22, 1, 0]

import { nomes } from './data/nomes-desord.mjs'

bubblesort(nums2)
console.log(nums2)
console.log({pass, comps, trocas})


console.time('Tempo da ordenação')
bubblesort(nomes)
console.timeEnd('Tempo da ordenação')
console.log(nomes)
console.log({pass, comps, trocas})
