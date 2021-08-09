// Função tradicional com um parâmetro e 
// 1 linha no corpo, com return

function quadrado(x) {
    return x * x
}

//Arrow Function: forma "abreviada" de escrever funções em JS

//Arrow function equivalente
//1) A função é atribuida a uma variável (ou ainda melhor, uma constante)
//2) Desaparece a palavra-chave "function"
//3) Desaparece os parênteses em torno do parâmetro
//4) Entre o parâmetro e o corpo da função, temos o sinal "=>" (arrow, flecha)
//5) desaparecem as chaves que delimitam o corpo da função
//6) Desaparece a palavra chave "return"
const quadrado2 = x => x * x

console.log(quadrado(7))
console.log(quadrado2(7))
console.log('---------------------------')

//Função tradicional com 2 parâmetros, 1 linha de corpo com return
function potencia(base, expoente){
    return base ** expoente
}

// Arrow function correspondente
// retorna os parênteses em torno dos parâmetros
const potencia2 = (base, expoente) => base ** expoente

console.log(potencia(2, 5))
console.log(potencia2(2, 5))

console.log('---------------------')

//função tradicional sem parâmetros, 1 linha de corpo com return

function datahoraatual(){
    return new Date()
}

//Arrow function correspondente
//Os parênteses vazios marcam a posição dos parâmetros

const datahoraatual2 = () => new Date()

console.log(datahoraatual())
console.log(datahoraatual2())

console.log('---------------------')

//função tradicional com 1 parâmetro e múltiplas linhas de corpo

function fatorial(n){
    let res = 1
    for(let i = n; i > 1; i--) res *= i
    return res
}
const fatorial2 = n => {
    let res = 1
    for(let i = n; i > 1; i--) res *= i
    return res
}

console.log(fatorial(5))
console.log(fatorial2(5))