// AULA 182

// 'Set' does not accept repetitions and is not indexed

/**
 * TODO: See the links below:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set
 * 
 */

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corintians')
times.add('Flamengo')
times.add('Vasco') // Repetition does not to be added

console.log(times) // Set( 5 ) { 'Vasco', 'São Paulo', 'Palmeiras', 'Corintians', 'Flamengo' }
console.log(times.size) // 5,
console.log(times.has('vasco')) // false
console.log(times.has('Vasco')) // true
times.delete('Flamengo') // deleting Flamengo from times
console.log(times.has('Flamengo')) // false because Flamengo was deleted

const nomes = [ 'Raquel', 'Lucas', 'Julia', 'Lucas' ]
const nomesSet = new Set(nomes)
console.log(nomesSet) // Expect output Set(3) { 'Raquel', 'Lucas', 'Julia' }
//! The repetition was removed ('Lucas')