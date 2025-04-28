/**
 * AULA 197
 * 
 * 
 */

function gerarNumerosEntre(min, max, numerosProibidos) {

    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegasena(qtdNumeros, temtativas = 1) {
    try{
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(error) {
        if(temtativas > 10) {
            throw 'Não deu certo!'
        } else {
            return gerarMegasena(qtdNumeros, ++temtativas)
        }
    }

}

gerarMegasena(15)
    .then(console.log)
    .catch(console.log)

