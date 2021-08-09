/* 
Objetos são estruturas da linguagem JS que permitem armazenar múltiplos valores dentro de uma variável, tal como os fatores. 
No entanto, ao contrário destes, as posições dos valores são nomeadas e não numeradas
*/

//Criação de um objeto vazio
let objeto1 = new Object() // forma tradicional OBS: não ta funcionando
let objeto2 = {} // forma moderna

//Criando objetos com propriedades
//Uma propriedade é um par formado pelo nome da propriedade
//é o valor da propriedade, separados por dois pontos
//propriedades são tambem chamadas de atributos
let pessoa = {
    nome: 'Fernando Almeida',
    sexo: 'M',
    dataNasc: '2001-13-10',
    ocupacao: 'Estudante',
    //quando nomes de propriedades contêm espaços ou
    //caracteres acentuados, eles devem vir entre aspas
    'cidade de origem': 'franca/sp',
    'série': '3º C',
    gostos: ['Jogar', 'Comer', 'dormir']
}

//Acessando as propriedades do objeto
console.log(pessoa.sexo)

//Quando o nome da propriedade contém espaços ou acentos
//Devemos acessá-la usando a Sintaxe dos colchetes
console.log(pessoa['cidade de origem'])

// A sintaxe dos colchetes sempre funfa mesmo com propriedades simples
console.log(pessoa['dataNasc'])
console.log(pessoa['ocupacao'])

//Uma consequência da sintaxe dos colchetes é a possibilidade de 
//ter nomes de propriedaes dentro de variáveis
// como os valores são propriedades de outra variável então ele meio que ja linca

let props = ['nome', 'sexo', 'dataNasc', 'ocupacao']

for(let p of props){
    console.log(pessoa[p])
}

console.log('---------------------------')

//Acrescentando novas propriedades a um objeto existente
pessoa.email = 'fernandoasfilho74@gmail.com'
pessoa['telefone contato'] = '(16) 99100-5074'

console.log(pessoa)

let carro = {}
carro.modelo = 'Volkswagen'
carro.marca = 'Fusca'
carro.cor = 'Preto'
carro.ano = 1969
carro['nome propriedade'] = 'Juscelina Jordão'

console.log(carro)

console.log('-------------------')
console.log('Exibindo as propriedaes do objeto "pessoa"')

// for..in: retorna as propriedades de um objeto (nome da propriedade)
for(let prop in pessoa){
    console.log(prop)
}

console.log('-------------------')
console.log('Exibindo as propriedaes do objeto "carro"')

for(let prop2 in carro){
    console.log(prop2)
}

//for..in pode ser utilizado juntamente com a sintaxe dos colchetes
//para recuperar o valor de todas as propriedades de um objeto
// meio que pego o nome da sintaxe e o valor dela

for(let p in pessoa){
    console.log(`${p} -> ${pessoa[p]}`)
}