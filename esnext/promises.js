/**
 *? Promise
 * 
 * TODO: See the links below:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises
 * 
 * 
 */

 function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
 }

 falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?')) 
// TODO: See the link: 
//*https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    .then(outraFrase => console.log(outraFrase)) // Expected output: Que legal!?!?
// handling error    
    .catch(err => console.error(err)) 