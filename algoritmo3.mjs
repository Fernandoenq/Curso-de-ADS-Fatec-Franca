/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/

// ----------- Selection sort --------------


const z = (y, fnComp) => {

    // Loop x vai até a PENÚLTIMA posição do vetor
    for(let x = 0; x < y.length - 1; x++) {
        let w = x + 1

        // Loop para procurar o menor valor no restante do vetor
        // Então w pega o menor valor no restante do vetor
        for(let i = w + 1; i < y.length; i++) {
            if(fnComp(y[w], y[i])) w = i
        }

        // Se o valor em w for menor que o valor em x,
        // efetua a troca
        if(fnComp(y[x], y[w])) {
            [ y[x], y[w] ] = [ y[w], y[x] ]
        }
    }
}

import { objMotoristas } from './data/motoristas-obj-desord.mjs'


// Ordenando por nome_motorista
//selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)

// Ordenando por nome_motorista em ordem DECRESCENTE
// selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista < elem2.nome_motorista)

// Ordenando por nome_motorista em ordem DECRESCENTE ignorando acentos
// selectionSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista.localeCompare(elem2.nome_motorista, 'pt-br') <= 0)  // LEEEEENTO

// Ordenação em dois níveis: primeiro por razao_social e depois por nome_motorista
z(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social) {     // Mesma empresa
        // Desempate é feito pelo nome do motorista
        return elem1.nome_motorista > elem2.nome_motorista
    }
    // Empresas diferentes, comparação direta de razao_social
    else return elem1.razao_social > elem2.razao_social
})

console.log(objMotoristas)
