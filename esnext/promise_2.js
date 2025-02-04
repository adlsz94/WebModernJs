// AULA 190

/**
 *? Promise.prototype.then
 * 
 * TODO: See the links below:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
 * 
 */

/**
    setTimeout(function(){
        console.log('Executando a callback...')
        setTimeout(function(){
            console.log('Executando a callback...')
    
            setTimeout(function(){
                console.log('Executando a callback...')
            }, 2000)
            
        }, 2000)
    }, 2000)
*/

/**
    function esperarPor(tempo = 2000 ) {
        return new Promise(function(resolve){
            setTimeout(function(){
    
                console.log('Executando a promise...')
    
                resolve('Vishhh!')
    
            }, tempo)
        })
    }
    
    esperarPor(3000).then(texto => console.log(texto))
*/

function esperarPor(tempo = 2000 ) {
    return new Promise(function(resolve){
        setTimeout(function(){

            console.log('Executando a promise...')

            resolve()

        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)