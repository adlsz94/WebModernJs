//AULA 169

const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
// const bodyParser = require('body-parser') DEPRECATED. SO USE BELOW CODE:

/**
 * TODO: See the link(s):
 * 
 * https://stackoverflow.com/questions/5710358/how-to-access-post-form-fields-in-express/63999686#63999686
 * 
 * https://github.com/expressjs/body-parser
 * 
 */
app.use(express.json())
app.use(express.urlencoded({
    extended: true
})); //Parse URL-encoded bodies. This is  the newer method - Middleware.

app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.getProdutos())  // Enviando todos os produtos para o frontend. Usando o método getProdutos() da minha função bancoDeDados.js.
    
})
app.get('/produtos/:id', (req, res) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req,res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco    
    })
    res.send(produto) // Converterá para JSON
})

app.put('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)  // Converterá para JSON
})
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})