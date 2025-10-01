// AULA 225 - Formulários - Servidor
// See the link: https://expressjs.com/
// npm install express --save
const express = require('express')
const app = express()

// See the link: https://www.npmjs.com/package/body-parser
// npm install body-parser
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Parabéns. Usuário Incluído</h1>')
})

app.listen(3003, () => {
    console.log('Servidor executando na porta 3003.')
})