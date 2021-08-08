let frutas = ['laranja','maça','banana','melancia']

//push(): inserção no final do vetor
frutas.push('morango')

console.log(frutas)

// unshift(): inserção no inicio o vetor
frutas.unshift('maracuja')
console.log(frutas)

//splice(): inserção em posição intermediária
//parametros
//1° a posição para inserção
//2º quanto elementos serão apagados? (na inserção, informamos 0)
//3º O novo element a ser inserido

frutas.splice(3, 0, 'mamão')
console.log(frutas)

//pop(): retira o ultimo elemento do vetor
let ultimo = frutas.pop()
console.log(ultimo, frutas)

//shift(): retira do primeiro elemento do vetor
let primeiro = frutas.shift()
console.log(primeiro, frutas)

//splice(): retira um elemento de qualquer posição
//parametros
//1° a posição do elemento a ser movido
//2° quantos elementos serão removidos (na remoção, deve ser pelo menos 1)
//splice() SEMPRE retornara um vetor, mesmo que vazio , na remoção
let intermed = frutas.splice(3,0)
console.log(intermed, frutas)

// Os metodos de inserção (push(), unshift() e splice()) são capazes
//de inserir vários elementos e uma uníca vez
frutas.push('jabuticaba', 'abacaxi', 'amora', 'abacate')
console.log(frutas)

console.log('--------------------------------')
//percurso (1): for tradicional
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

console.log('--------------------------------')

for(let i = frutas.length - 1; i >= 0; i--) {
    console.log(frutas[i])
}

console.log('--------------------------------')

for(let f of frutas){
    console.log(f)
}