let a = 10, b = 8, c = 10
console.log(a > b)
console.log(a < b)
console.log(a === b)
console.log(a !== b)
console.log(a === c)
console.log(a !== c)

console.log('======================================')

let nome1 = "CATIFUNDA", nome2 = "FELISBINO", nome3 = 'ÁGATHA'

console.log(nome1 > nome2)
console.log(nome1 < nome2)
console.log(nome1 === nome2)
console.log(nome1 > nome3)
console.log(nome1 < nome3)
console.log(nome1 === nome3)

console.log('======================================')

//booleanos
let x = true, y = false, z = true

console.log(x > y)
console.log(x < y)
console.log(x === y)
console.log(x !== y)
console.log(x === z)
console.log(x !== z)

console.log('======================================')

//Diferença entre usar == e ===
// == : verdadeiro se o conteúdo for igual, mesmo se os tipos for diferentes
// === : verdadeiro apenas se o conteúdo e tipos forem iguais

let i = 56, j = '56'
console.log(i == j) // converte tipos automaticamentes 
console.log(i === j)// nao converte os valores

console.log('======================================')
// Vetores
// na verdade eles meio que comparam a posição de memorias onde cada vetor foi parar ai fode tudo
let v1 = [10, 20, 30, 40, 50]
let v2 = [-3, -2, -1, 0]
let v3 = [10, 20, 30, 40, 50]

console.log(v1 > v2)
console.log(v1 < v2)
console.log(v1 === v2)
console.log(v1 !== v2)
console.log(v1 === v3)
console.log(v1 !== v3)
//MORAL DA HISTÓRIA: Vetores não sao diretamente comparáveis

console.log('======================================')

//Objetos

let o1 = {marca: 'Volk', modelo: 'Fusca', cor: 'Preto', ano: 1969}
let o2 = {marca: 'Che', modelo: 'Opala', cor: 'Marrom', ano: 1979}
let o3 = {marca: 'Volk', modelo: 'Fusca', cor: 'Preto', ano: 1969}

console.log(o1 > o2)
console.log(o1 < o2)
console.log(o1 === o2)
console.log(o1 !== o2)
console.log(o1 === o3)
console.log(o1 !== o3)
//MORAL DA HISTÓRIA: Objetos tambem nao sao diretamente comparáveis

//teria que ser assim
console.log(o1.marca > o2.marca)
console.log(o1.marca < o2.marca)
console.log(o1.modelo === o3.modelo)
/*
    CONCLUSÂO
    Em JS, Apenas os seguintes tipos de dados são diretamentes comparáveis:
    * números
    * strings
    * booleanos
*/



