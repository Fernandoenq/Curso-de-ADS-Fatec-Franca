let pass, comps, trocas

/*
    FnComp() passará à função externa os dois elementos adjacentes do vetor e retornará
    -true: se o primeiro element for maior que o segundo
    -false caso contrário
*/

function bubblesort(vetor, fnComp){
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
            //if(vetor[i] > vetor[i + 1]){
            if(fnComp(vetor[i], vetor[i + 1])){
                [vetor[i], vetor[i + 1] ] = [vetor[i + 1], vetor[i]]
                trocou = true
                trocas++
            }
        }
    } while(trocou)
}

import { objMotoristas } from './data/motoristas-obj-desord.mjs'

console.time('Tempo de ordenacao')

//Ordenando por nome_motorista

// Ordenando por nome_motorsita em ordem crescente, se quiser decrescente bast trocar '>' para '<'
//bubblesort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)

//ordenando por nome_motorista em ordem descrescnte ignorando acentos
//bubblesort(objMotoristas, (elem1, elem2) => elem1.nome_motorista.localeCompare(elem2.nome_motorista, 'pt-br') <= 0) 
//o de cima é Lento cuidado em 

//Ordenação em dois níveis: primeiro por razão social e depois por nome_motorista
bubblesort(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social){
        // Desempate é feito pelo nome do motorista
        return elem1.nome_motorista > elem2.nome_motorista
    }
    // Empresas diferentes, comparação direta de razão social
    else return elem1.razao_social > elem1.razao_social
})


console.timeEnd('Tempo de ordenacao')

console.log(objMotoristas)
console.log({pass, comps, trocas})