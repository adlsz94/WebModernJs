// AULA 192 DESAFIO PROMISE / AULA 193 RESPOSTA

/**
    const fs = require('fs')
    
    const path = require('path')
    
    
    function lerArquivo(caminho) {
        return new Promise(resolve => {
            
            fs.readFile(caminho, function(_, conteudo) {
                
                resolve(conteudo.toString())
                
            })
            console.log('')
        })
    }
    
    const caminho = path.join(__dirname, 'dados.txt')
    
    lerArquivo(caminho)
        .then(conteudo => conteudo.split('\n'))
        .then(linhas => linhas.join('.'))
        .then(conteudo => `O valor final é: ${conteudo}`)
        .then(console.log)
*/

/**
 * TODO: See the links below
 * 
 * https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
 * 
 */

const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');
async function lerArquivo() {
  try {
    const filePath = resolve('./dados.txt');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
}
lerArquivo();