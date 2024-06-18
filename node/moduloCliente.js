const moduloA = require('./moduloA') // Acessando através do caminho relativo via ./
const moduloB = require('./moduloB')

console.log(moduloA.ola) // ExpectedFala pessoal 
console.log(moduloA.bemVindo) // Expected Bem vindo ao node
console.log(moduloA.ateLogo) // Expedcted Até o próximo exemplo
console.log(moduloA)
/**
 * Expected:
 ** {
 ** ola: 'Fala pessoal',
 ** bemVindo: 'Bem vindo ao node',
 ** ateLogo: 'Até o próximo exemplo'
 ** }
 * 
 */

console.log(moduloB.bomDia) // Expected Bom dia!
console.log(moduloB.boaNoite) // Expected [Function: boaNoite]
console.log(moduloB) // Expected { bomDia: 'Bom dia!', boaNoite: [Function: boaNoite] }

/**
 * O que fizemos neste exemplo foi usar o sistema de module do node que é
 * o CommonJS
 * 
 * TODO SEE THE LINKS:
 * 
 ** https://www.freecodecamp.org/news/modules-in-javascript/
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules
 * 
 */