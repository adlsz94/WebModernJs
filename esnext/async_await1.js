/**
 * AULA 196
 * 
 * TODO SEE THE LINKS:
 * 
 *& https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 * 
 * 
 */

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout (() => resolve(), tempo)
    })
}

/**
    esperarPor(2000)
        .then(() => console.log('ExecutaNdo promise1...'))
        .then(esperarPor)    
        .then(() => console.log('ExecutaNdo promise2...'))
        .then(esperarPor)
        .then(() => console.log('ExecutaNdo promise3...'))
*/

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValoRapidor() {
    return 20 // promise resolvida
}

async function executar() {
    let valor = await retornarValoRapidor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)// return 20

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)// return 21

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)// return 22

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

//executar().then(console.log) // return 23
executarDeVerdade() // return 23