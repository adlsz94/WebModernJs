// AULA 181

/**
 * TODO: See the links:
 * 
 ** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 * 
 */

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set( 'angular', { framework: true } )

console.log(tecnologias.react) // output undefined
console.log(tecnologias.get('react')) //FORMA CORRETA output { framework: false }
console.log(tecnologias.get('react').framework) //FORMA CORRETA, output false
console.log(tecnologias.get('angular').framework) //FORMA CORRETA, output true

const chavesVariadas = new Map( [ 
    [ function () { }, 'Função'],
    [ { }, 'Objeto' ],
    [ 123, 'Numero'],
 ] )