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

gerarVariosNumemors().then(numeros => console.log(numeros))