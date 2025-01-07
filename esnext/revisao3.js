/**
 * TODO: See the links:
 * 
 ** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 * 
 ** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * 
 */

// ES08: Object.values / Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // expected output [ 1, 2, 3 ]
console.log(Object.entries(obj)) // expected output [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente'
    }
}
console.log(pessoa.nome, pessoa.ola()) // expected output Carla Oi gente

// Class
class Animal {}
class Cachorro extends Animal {
    latir() {
        return 'Auau!'
    }
}
console.log(new Cachorro().latir())