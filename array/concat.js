const filhas = ['Aryana', 'Cibele']
const filhos = ['jack', 'Eric']
const todos = filhas.concat(filhos, 'Jony')
console.log(
    `Filhas: ${filhas}, filhos: ${filhos}, todos: ${todos}`)
// Expected output: Filhas: Aryana,Cibele, filhos: jack,Eric, todos: Aryana,Cibele,jack,Eric,Jony


console.log(['a','b'].concat([ 1, 2 ], [ 3, 4 ], 5, [[6, 7 ]]))
// Expected output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]

/**
 * ?Array.prototype.concat()
 * 
 * TODO: See the links:
 * 
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * 
 * O método concat() é utilizado para mesclar dois ou mais arrays. 
 * Esse método não altera os arrays existentes, mas, em vez disso, retorna um novo array.
 * 
 * Try it:
 */

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3) // Expected output: Array ["a", "b", "c", "d", "e", "f"]

/**
 *?Sintaxe
 * 
 * concat()
 * concat(valor0)
 * concat(valor0, valor1)
 * concat(valor1, valor2, ..., valorN)
 * 
 *? Parâmetros
 * 
 ** valorN - Optional
 * Arrays e/ou valores para concatenar em um novo array. Se todos os parâmetros valorN forem omitidos, 
 * concat retorna uma shallow copy de todos os arrays existentes do qual é chamado. 
 * 
 * TODO: See the link about shallow copy:
 ** https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
 * 
 * Veja a descrição abaixo para mais detalhes.
 * 
 * Valor de retorno
 * Uma nova instância Array
 * 
 * TODO: See link about Array:
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
 * 
 * Description:
 * 
 */