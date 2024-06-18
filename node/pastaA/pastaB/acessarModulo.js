const moduloA = require('../../moduloA')
console.log(moduloA.ola)

/**
 * Criamos uma pasta chamada saudacao dentro da pasta node_modules.
 * Logo criamos um arquivo chamado index.js.
 * Dentro do arquivo index.js, escrevemos o código abaixo:
 * 
 ** module.exports = {
 **     ola: 'Olá e Bom dia pessoal!'
 ** }
 * 
 * Logo abaixo importamos saudacao.
 */
const saudacao = require('saudacao')
console.log(saudacao.ola)

// Podemos importar assim ('./pastaC/index)
//* const c = require('./pastaC/index')

// ou importamos chamando apenas o nome da pastaC
const c = require('./pastaC') // o node buscará o arquivo index.js dentro da pastaC.
console.log(c.ola2)

// Importando o método http do nodejs
const http = require('http')
// Criando o servidor
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080) // Ouvindo na porta 8080