const fs = require('fs')

//sincrona
const caminho = __dirname + '/arquivo.json'

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)
/**
 * Expected:
 * {
 **   "db": {
 **     "host": "localhost",
 **     "port": 5432,
 **     "user": "usuario",
 **     "password": "123456"
 **   }
 ** }
 */


// Assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) 
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

// Reading a folder
fs.readdir(__dirname, (err, files) => {
    console.log('Files in directory:')
    console.log(files)
})

/**
 * TODO: See the link(s):
 * 
 ** https://www.w3schools.com/nodejs/nodejs_filesystem.asp
 * 
 ** https://nodejs.org/api/modules.html
 * 
 ** https://nodejs.org/api/fs.html
 * 
 */