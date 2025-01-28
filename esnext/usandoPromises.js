// AULA 186

/**
 *? Promise
 * 
 * TODO: See the links below:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises
 * 
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 * 
 */

 // Com promise

const http = require('http')
 
const getTurma = (letra) => {
     // template string
     const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
     return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })
            
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
 
            })
        })
     })
 }
 
 /**
    let nomes = []
    getTurma('A').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
        
        getTurma('B').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
            
            getTurma('C').then(alunos => {
                nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
                console.log(nomes)
            })
        })
    })
 */

 Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(err => console.log(err))

    getTurma('D').catch(error => console.log(error.message))
