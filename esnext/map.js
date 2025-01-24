// AULA 181

/**
 * TODO: See the links:
 * 
 ** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map/clear
 * 
 */

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set( 'angular', { framework: true } )

console.log(tecnologias.react) // output undefined - incorrect use of
console.log(tecnologias.get('react')) //FORMA CORRETA output { framework: false }
console.log(tecnologias.get('react').framework) //FORMA CORRETA, output false
console.log(tecnologias.get('angular').framework) //FORMA CORRETA, output true

const chavesVariadas = new Map( [ 
    [ function () { }, 'Função'],
    [ { }, 'Objeto' ],
    [ 123, 'Numero'],
 ] )

 chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl) // Expected output: [Function (anonymous)] Função
                        //                  {} Objeto
                        //                  123 Número   
 })

 console.log(chavesVariadas.has(123)) // Expected output: true
 /**
  * has - Check if  the element passed in chavesVariadas.has(123) 
  * exists in chavesVariadas, case it exists, will return true or else false.
  */

 // Delete the element from chavesVariadas
 chavesVariadas.delete(123)
 console.log(chavesVariadas.has(123)) // Expected output: false, because 123 was deleted
 console.log(chavesVariadas.size) // Expected output: 2

 chavesVariadas.set(123, 'a')
 chavesVariadas.set(123, 'b')
 console.log(chavesVariadas.get(123)) // Expected output: 'b', because the last value for 123 was 'b'

 /**
  * Map does not accept key repetition, but acept values repetition.
  * 
  */
 chavesVariadas.set(456, 'b')
 console.log(chavesVariadas.get(456)) // Expected output: 'b', because the last value for 456 was 'b'