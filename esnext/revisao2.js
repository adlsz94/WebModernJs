// Arrow Function
const soma = ( a, b ) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexicol = () => console.log(this === exports)
const lexico2 = lexicol.bind()
lexicol() // expected output true
lexico2() // expected output true

// Parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log() // expected output Node
log(undefined) // expected output Node
log(null) // expected output null
log('Sou mas forte') // expected output Sou mas forte

// Operador rest(agrupar)
// TODO: See the link:
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5)) // expected output 14
