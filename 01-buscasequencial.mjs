/*
    ALGORITIMO DE BUSCA SEQUENCIAL

    Percorre o vetor, verficando se cada um dos elementos corresponde ao valor de busca. Ao encontrar uma correspondência,
    retorna a posição onde o valor de busca está no vetor.

    Caso o valor de busca nãoexista no vetor, retorna o valor convencional
*/

function buscaSequencial(vetor, valorBusca){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === valorBusca) return i // entrou valorBusca e intenrromp a função com return
    }
    return -1 // valorBusca nao existe em vetor

}

const frutas = ['laranjas', 'maça', 'uva', 'pera', 'jabuticaba', 'limao', 'mamao']

console.log('Posição de uva:', buscaSequencial(frutas, 'uva'))
console.log('Posição de laranjas:', buscaSequencial(frutas, 'laranjas'))
console.log('Posição de mamao:', buscaSequencial(frutas, 'mamao'))
console.log('Posição de abacate:', buscaSequencial(frutas, 'abacate'))

//Numero de comparações em um vetor de n elementos
//quando valor busca é encontrado: pos + 1
//Quando valorbusca não é encontrado: n

import {nomes} from './data/vetor-nomes.mjs'

console.log('Posição do Fernando:', buscaSequencial(nomes, 'FERNANDO'))