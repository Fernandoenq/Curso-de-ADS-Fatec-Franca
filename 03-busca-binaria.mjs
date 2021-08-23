/*
BUSCA BINÁRIA
 * 
 * Requer um conjunto de dados ORDENADO.
 * Atua dividindo o vetor sucessivamente em metades aproximadas,
 * até que o valor de busca seja localizado, ou que o ponteiro
 * de fim acabe antes do ponteiro de início. Essa última situação
 * indica que o valor de busca não existe no conjunto.
 * */

let comps

function buscaBinaria(vetor, valorBusca){
    comps = 0
    let ini = 0
    let fim = vetor.length - 1

    while(fim >= ini){
        comps++
        //Math.floor() Retira as casas decimais de um numero
        let meio = Math.floor((ini + fim) / 2)

        //Se o valor de busca for igual ao valor do vetor
        //na posição do meio, encontramos o que procuramos
        //e retornamos a posição onde encontramos
        if(valorBusca === vetor[meio]) {
            comps++
            return meio
        }
        //Senão, se o valor de busca for maior que o valor
        //do meio do vetor, descartamos a metade esquerda
        // do vetor trazendo o ponteiro ini para meio + 1
        else if(valorBusca > vetor[meio]){
            ini = meio + 1
            comps += 2 
        } 

        //Por fim, caso o valor de busca seja menor que o
        //valor do meio do vetor, descartamos a metade direita
        //do vetor trazendo o ponteiro fim para o meio -1

        else{
            fim = meio - 1
            comps += 2
        } 

    }

    //Se chegarmos até aqui, significa que fim < ini e, portanto,
    //o valor de busca não existe no vetor. Para indicar isso,
    //retornamos o valor convencional -1
    return -1
}

let nums = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

console.log('Posição de 33:', buscaBinaria(nums, 33), 'comps:', comps)
console.log('Posição de 77:', buscaBinaria(nums, 77), 'comps:', comps)
console.log('Posição de 81:', buscaBinaria(nums, 81), 'comps:', comps)

import { nomes } from './data/vetor-nomes.mjs'

console.log(`Posição de Fernando: ${buscaBinaria(nomes, 'FERNANDO')}, comps: ${comps}`)
console.log(`Posição de JULIANO: ${buscaBinaria(nomes, 'JULIANO')}, comps: ${comps}`)
console.log(`Posição de MATHEUS: ${buscaBinaria(nomes, 'MATHEUS')}, comps: ${comps}`)