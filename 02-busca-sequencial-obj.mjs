

/*
    Quando um algoritimo de busca precisa atuar sobre um vetor
    de objetos, a comparação não deve ser feita dentro da função
    que implementa o algoritimo. Em vez disso recebemos uma outra função
    (externa) como parâmetro que resolverá a comparação.

    Essa função externa será chamada passando o objeto atual de vetor
    e esperará um retorno true, caso a função externa determine que o objeto atual contém
    o valor debsca, ou false, caso contrário
*/ 

//Vesão fessor busca no vetor

import {objNomes} from './data/vetor-obj-nomes.mjs'

function buscaSequencial(vetor, fnComp){
    for(let i = 0; i < vetor.length; i++){
        //if(vetor[i] === valorBusca) return i // entrou valorBusca e intenrromp a função com return
        //console.log('Primeiro elemento do vetor:', vetor[i])//roda todos que tem a inicial do pesquisado
        if(fnComp(vetor[i])) return i 
    }
    return -1 // valorBusca nao existe em vetor

}

function comparaNome(obj){
    //console.log('Objeto recebido pela função externa:', obj)
    return obj.first_name === 'FERNANDO'
}

console.time('Buscando Fernando...')
console.log('Posição de Fernando:', buscaSequencial(objNomes, comparaNome))
console.timeEnd('Buscando Fernando...')

//Versão caio busca no vetor

function buscaSequencialObj(vetor, valorbusca){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].first_name === valorbusca) return "Posição do nome: " + valorbusca + " " + i + " Nomes semelhantes: " + vetor[i].alternative_names
    }
    return -1
}

console.log(buscaSequencialObj(objNomes, "CLEITON"))

console.log('Posição do Fernando:', buscaSequencial(objNomes, function(obj){
    return obj.first_name === 'FERNANDO'
}))


