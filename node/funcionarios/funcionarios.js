/**
 * TODO: See the link(s):
 * 
 ** https://axios-http.com/docs/example
 * 
 */

// importando axios
const axios = require('axios')

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const chineses = f => f.pais === 'China'
const mulhers = f => f.genero === 'F'
const menorSalario = (func, funcAtual) =>  {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    // mulher chinesa com menor salário
    const func = funcionarios
        .filter(chineses)
        .filter(mulhers)
        .reduce(menorSalario)

    console.log(func)

})
