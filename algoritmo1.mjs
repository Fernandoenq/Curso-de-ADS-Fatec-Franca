/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/

// ------------ Merge Sort ----------------


const z = (y, fnComp) => {
    if(y.length < 2) return y 

    // Vai dar para a variável x aproximadamente o meio do vetor
    let x = Math.floor(y.length / 2)

    // slice() divide um vetor da primeira posição informada (inclusive)
    // até a última posição informada (exclusive)
    // colocando tais valores na variavel w (do começo até a metade d0 vetor) já que a variável x tem 
    // o valor da metade
    let w = y.slice(0, x)

    // A variável V vai pegar os valores da metade até o fim do vetor
    let v = y.slice(x)

    // Variável que vai pegar 
    let u

    // Chamadas recursivas ao merge sort
    w = z(w, fnComp)
    v = z(v, fnComp)

    // t váriavel que vai recebendo valores a cada comparação para poder sar do while quando for maior que o tamanho do w
    // s váriavel que vai recebendo valores a cada comparação para poder sar do while quando for maior que o tamanho do s
    // r váriavel que vai pegando os menores valores de cada programação
    let t = 0, s = 0, r = []
    while(t < w.length && s < v.length) {
        if(fnComp(w[t], v[s])) {
            r.push(w[t])
            t++
        }
        else {
            r.push(v[s])
            s++
        }
    }
    if(t < s) u = w.slice(t)
    else u = v.slice(s)
    return [...r, ...u]
}


import { objMotoristas } from './data/motoristas-obj-desord.mjs'

// Ordenando por nome_motorista
//mergeSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista)

// Ordenando por nome_motorista em ordem DECRESCENTE
// mergeSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista < elem2.nome_motorista)

// Ordenando por nome_motorista em ordem DECRESCENTE ignorando acentos
// mergeSort(objMotoristas, (elem1, elem2) => elem1.nome_motorista.localeCompare(elem2.nome_motorista, 'pt-br') <= 0)  // LEEEEENTO

// Ordenação em dois níveis: primeiro por razao_social e depois por nome_motorista
let objMotoristasOrd = z(objMotoristas, (elem1, elem2) => {
    if(elem1.razao_social === elem2.razao_social) {     // Mesma empresa
        // Desempate é feito pelo nome do motorista
        return elem1.nome_motorista > elem2.nome_motorista
    }
    // Empresas diferentes, comparação direta de razao_social
    else return elem1.razao_social > elem2.razao_social
})

console.log(objMotoristasOrd)

