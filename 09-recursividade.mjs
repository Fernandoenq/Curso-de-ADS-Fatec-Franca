/*

    Fatorial de um numero natural é igual a ele mesmo 
    multiplicado por todos os seus antecessores

    5! = 5*4*3*2*1 (120)
    4! = 4*3*2*1 (24)
    3! = 3*2*1 (6)
    2! = 2*1  (2)

    Casos especiais
    
    1! = 1
    0! = 1

    Expressando recursivamente:

    5! = 5 * 4!
    4! = 4 * 3!
    3! = 3 * 2!
    2! = 2 * 1!

    fatorial(n) = n * fatorial(n - 1), para qualquer n > 1

    diz-se que uma definição é recursiva quando a definição aparece
    dois lados da igualdade

    para cada algoritimo, existe o correspondente iterativo
    no entanto 

*/

// relação iterativa (iter = caminho)
function fatorial(n){
    let resultado = 1
    for(let i = n; i > 1; i--) resultado *= i
    return resultado
}

console.log('Fatorial de 5 é:', fatorial(5))

// Implementação RECURSIVA de uma função que calcula o fatorial
// de um número. Note que existe uma chamada à própria função
// dentro dela 
// Stack Overflow = estouro de pilha
//condição de saída: é uma situação em que a função recursiva
//não chama a si mesma
function fatorial(n) {
    if(n <= 1) return 1 // -> condição de saída
    return n * fatorialRec(n - 1)
}
console.log('Fatorial (recursivo) de 5:', FatorialRec(5))