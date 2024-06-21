const contadorA = require('./instanciaUnica') // exportamos o objeto do node e ele faz cache desse objeto.
const contadorB = require('./instanciaUnica') // Se o objeto já tiver sido criado, ele retorna a mesma instância.

const contadorC = require('./instanciaNova') () // instância criada a partir de uma factory
const contadorD = require('./instanciaNova') () // instância criada a partir de uma factory

contadorA.inc() // incrementa 1
console.log(contadorA.valor) // expect 2
contadorA.inc() // incrementa 1
console.log(contadorA.valor) // expect 3

console.log(contadorA.valor, contadorB.valor) // Expected 3 3

contadorC.inc() // incrementa 1
console.log(contadorC.valor) // expect 2

contadorC.inc() // incrementa 1
console.log(contadorC.valor) // expect 3

console.log(contadorC.valor, contadorD.valor) // Expected 3 1
