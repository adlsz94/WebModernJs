//Pesquisa pessoal

/**
 *? PROMISSE.PROTOTYPE.THEN
 * 
 * TODO: SEE THE LINKS BELOW:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 * 
 *? Resusmo
 * 
 * O método then() retorna uma Promise. Possui dois argumentos,
 * ambos são "call back functions", sendo uma para o sucesso e
 * outra o fracasso da promise(promessa).
 * 
 *? Sintaxe
 * 
 */

 /**
**   p.then(quandoRealizada, quandoRejeitada)
*   
**    p.then(function(valor) {
**       //sucess
**    }, function(motivo) {
**       //rejeited
**    })
 */
/**
 *? Parametros
 * 
 ** quandoRealizada
 *      Uma Funcion chamada quando a Promise é cumprida(Sucesso).
 *      Essa função tem um argumento, o valor do cumprimento.
 * 
 ** quandoRejeitada
 *      Uma Function chamada quando a Promise é rejeitada.
 *      Essa função tem um argumento, o motivo da recusa.
 * 
 *? Descrição
 * 
 * Assim como o método .thenf() e Promise.prototype.catch(), 
 * retornam uma Promise, eles podem ser encadeados - uma operação chamada
 * composition.
 * 
 *? Exemplos
 * 
 */

 // Usando o método then
 let p1 = new Promise(function(resolve, reject) {
    resolve('Success')
    //or
    //reject('Error!')
 })

 p1.then(
    function(value) {
        console.log(value) // Success
    }, 
    function(reason) {
        console.log(reason) // Error!
    }
)

/**
 * Encadeando
 * 
 * Já que o método then(develve uma Promise, você
 * pode facilmente encadeá-los.
 * 
 */

let p2 = new Promise(function(resolve, reject) {
    resolve(1)
})

p2.then(function(value){
    console.log(value) // 1
    return value + 1
}).then(function(value) {
    console.log(value) // 2
})

/**
 * No ecemplo acima, o último .then() recebeu a soma value +1,
 * que resultou em 2, porém se o retorno de value + 1 fosse 
 * uma Promise que também retornasse value + 1, o resultado seria o mesmo.
 * 
 * Note, no exemplo abaixo, que leva 1000ms para a impressão de 2 ocorrer.
 * 
 */

let p3 = new Promise(function(resolve, reject) {
    resolve(1)
})

p3.then(function(value) {
    console.log(value) // 1
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(value + 1)
        }, 1000)
    })
}).then(function(value){
    console.log(value) // 2
})

/**
 *? Especificações
 * 
 * TODO: See the links below:
 * 
 ** Specification promise.prototype.then
 ** ECMAScript Language Specification:
 * 
 ** https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.then
 * 
 */