console.log(module.exports)
console.log(module.exports === this) // Expected true
console.log(module.exports === exports) // Expected true

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports) // Expected { a: 1, b: 2, c: 3 }


exports = {        //! Quando for exportar um arquivo, não faça desta maneira.
    nome: 'Teste'
}

console.log(module.exports) // Expected { a: 1, b: 2, c: 3 }

module.exports = { publico: true} // TODO: Forma correta de exportar

