/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/

//----------- busca binária ---------------
const z = (y, x) => {
    let w = 0 // pega o inicio 
    let v = y.length - 1 //pega o fim
    while(v >= w) {
        let u = Math.floor((w + v) / 2) // pega o meio


    switch(x(y[u])) {
            case 0:     // Encontrado o valor de busca
                
                return u

            case 1:     // Valor busca > valor do meio do vetor
                
                w = u + 1
                break

            default:   // -1, valor de busca < valor do meio do vetor
                
                v = u - 1

        }

    // Se chegamos até aqui, significa que fim < ini e, portanto,
    // o valor de busca não existe no vetor. Para indicar isso,
    // retornamos o valor convencional -1
    
}
return -1
}

/*Para usar a busca binária em um VETOR DE OBJETOS, precisamos
    transferir a comparação para uma função externa que retorne um
    dos três valores:
    0 -> caso ambos os valores sejam IGUAIS
    1 -> caso o valor de busca seja MAIOR que o valor do meio do vetor
    -1 -> caso o valor de busca seja MENOR que o valor do meio do vetor
*/
function comparar(valorMeio, valorBusca = 'FERNANDO') {
    if(valorBusca === valorMeio.first_name) return 0
    else if(valorBusca > valorMeio.first_name) return 1
    else return -1
}

import { objNomes } from './data/vetor-obj-nomes.mjs'

console.log('Posição de first_name === FERNANDO', z(objNomes, comparar))

