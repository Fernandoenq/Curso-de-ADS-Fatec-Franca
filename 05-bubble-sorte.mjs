/*
BUBBLE SORT
Percorre o conjunto de dados, comparando o elemento atual com o seu
sucessor e promovendo a troca entre eles caso o primeiro seja maior
que o segundo.
Faz isso em várias passadas, até, que, na última delas, nenhuma troca
tenha sido registrada.
*/

function bubblesort(vetor){
    let trocou

    do{
        trocou = false

        // Percurso for tradicional até a penúltima posição do vetor

        for(let i = 0; i < vetor.length - 1; i++){
            if(vetor[i] > vetor[i + 1]){
                [vetor[i], vetor[i + 1] ] = [vetor[i + 1], vetor[i]]
                trocou = true
            }
        }
    } while(trocou)
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

bubblesort(nums)
console.log(nums)