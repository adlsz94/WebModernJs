/**
 * TODO: See the link(s):
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
 * 
 * 
 */


console.log(this === global) // expect false, pois o this aponta para modules.expoerts
console.log(this === module) // expect false, pois o this é um object.

console.log(this === module.exports) // expect true.
console.log(this === exports) // experct true, pois o this aponta para a mesma refência.
console.log(typeof this, typeof exports) // Expected object, object.
console.log(typeof module) // Expected object
console.log(this) // expect {}

// O this dentro de uma function
function logThis() {
    console.log('Dentro de uma função')
    console.log(this === exports) // expected false, pois dentro de uma function o this não aponta para exports
    console.log(typeof this) // Aqui o this aponta para o objeto da função em que ele está.
    console.log(this === module.exports) // Expect false
    console.log(this === global) // expected true, pois o this dentro de uma function aponta para o global

    this.perigo = 'Cuidado, pois dentro de uma função o this aponta para global.'
}

this.foraDaFuncao = 'Fora da função o this aponta para module.export'
logThis()

/**
 * CONCLUSÃO:
 * 
 * Dentro de uma função tradional, o 'this' aponta para o objeto global.
 * Fora de uma função, o 'this' aposta para module.exports.
 * 
 */

/**
 *? UMA IMPORTANTE OBSERVAÇÃO: THIS DENTRO DE UMA ARROW FUNCTION
 * 
 * TODO: See the link(s):
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
 * 
 * 
 * 
 *! Dentro de uma arraw function o 'this' não apontará mais para o objeto global,
 *! mas apontará para module.exports.
 *
 * Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão 
 ** de função (function expression) e não tem seu próprio this, arguments, super ou new.target. 
 * Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas 
 * não podem ser usadas como construtores (constructors).
 */
let thisNaArrowFunction = () => {
    console.log(this === global) // expected false, pois dentro de uma arrow function "o this não aponta para module.exports".
    console.log(this === module.exports) // expected true, pois dentro de uma arrow function o this aponta para module.exports
}