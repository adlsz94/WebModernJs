// AULA 192 DESAFIO PROMISE / AULA 193 RESPOSTA

const fs = require('fs')
const path = require('path')

async function lerArquivo() {
  try {
    const caminho = path.join(__dirname, 'dados1.txt')// procura o arquivo no diretorio atual.
    const conteudo = await fs.promises.readFile(caminho, 'utf8')// Lerá o arquivo no diretorio
    console.log(conteudo)
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err.message)
  }
}

lerArquivo()
/**
 * Expected output:
 * Desafio_3
 * Resolvido?
 * Sim, após testar várias maneiras.
 * 
 */


/**
 * TODO: See the links below
 * 
 ** https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
 * 
 */


const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');
async function lerArquivo1() {
  try {
    const filePath = resolve('./dados.txt');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
}

lerArquivo1();
/**
 * Expected output:
 * Linha 1
 * linha 2
 * linha 3
 * 
 */