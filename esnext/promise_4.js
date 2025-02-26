// AULA 194

/**
 * Quando temos várias promises para resolver e precisamos
 * chamar o método then(), somente após as promises serem
 * resolvidas(resolve()). 
 * 
 */

function gerarNumerosEntre(min, max, tempo){

    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {

        setTimeout(function(){

            const fator = (max - min + 1)
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)

        })
    })
}

/**
 *? Promise.all()
 * 
 * TODO: See the link below:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * 
 */

function gerarVariosNumemors() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)
    ])
}

gerarVariosNumemors()
    .then(numeros => console.log(numeros))
// Expect output some like this: [ 49, 29, 48, 39, 7, 39 ]

console.time('promise')

gerarNumerosEntre()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeLog('promise')
        console.timeEnd('promise')
    })