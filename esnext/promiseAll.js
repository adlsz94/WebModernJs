/**
 *? Promise.all()
 * 
 * TODO: See the link below:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * 
 * O método Promise.all(iterable) retorna uma única Promise que resolve quando todas as
 * promises no argumento iterável forem resolvidas ou quando o iterável passado como 
 * argumento não contém promises. 
 * É rejeitado com o motivo da primeira promise que foi rejeitada.
 * 
 * Experimente
 *  
 */

const { values, reject } = require("lodash")

 const promise1 = Promise.resolve(3)
 const promise2 = 42
 const promise3 = new Promise((resolve, reject) => {
     setTimeout(resolve, 100, 'foo')
 })

 Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values) //  Expected output: Array [3, 42, 'foo']
    })

/**
 *? Simtaxe
 * 
 ** Promise.all(iterable)
 * 
 *? Parâmetros
 * 
 ** iterable
 *      Um objeto iteravel, como um Array, ou String.
 * 
 * TODO: See the links below:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
 * 
 * Retorno
 * 
 * - Uma Promise já resolvida se o iterável passado for vazio.     
 * 
 * - Uma Promise resolvida assíncronamente se o iterável passado não conter promises. 
 *   Nota, Google Chrome 58 retorna uma promise já resolvida nesse caso.
 * 
 * = Uma Promise pendente em todos os outros casos. Essa promise retornada é então 
 * resolvida/rejeitada assíncronamente (tão logo a pilha esteja vazia) quando todas 
 * as promises no dado iterável forem resolvidas, ou se alguma das promises for rejeitada. 
 *   Veja o exemplo sobre "Assincronia ou sincronia da Promise.all" abaixo. 
 *   Os valores retornados estarão na ordem em que as promises foram passadas.
 * independentemente da ordem em que forem concluídas.
 * 
 *? Descrição
 * 
 * Esse método pode ser usado para agregar resultados de promises.
 * 
 *? Resolução
 * 
 * 
 * A promise retornada [e resolovida com um array contendo todos os 
 * valores dos iteráveis passados como argumento (como valores que são promises).]
 * 
 * - Se um iterável vazio é passado, então esse método retorna (sincronamente) 
 * uma promise já resolvida.
 * - Se todas as promises passadas forem resolvidas, ou não forem promises, 
 * a promise retornada por Promise.all é resolvida assincronamente.
 * 
 *? Rejeição
 * 
 * Se qualquer uma das promises passadas for rejeitada, Promise.all assíncronamente 
 * é rejeitada com o valor da promise rejeitada, independentemente se outras promises 
 * foram resolvidas.
 * 
 *? Exemplos
 * 
 *? Utilizando Promise.all
 * 
 * Promise.all espera que todas as promises sejam reslovidas ( ou a primeira rejeição)
 * 
 */

let p1 = Promise.resolve(3)
let p2 = 1337
let p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('foo')
    }, 100)
})

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values) // Expected output: Array [3, 1337, 'foo']
})

/**
 * Se o iterável conter valores que não são promises, eles serão ignorados, mas ainda 
 * serão contados no array da promise retornada (se a promise for resolvida):
 * 
 */

// Essa será considerada como se o iterável passado fosse vazio, logo ela será resolvido
var p4 = Promise.all([1, 2, 3]);
// Essa será considerada como se o iterável passado contém apenas a promise resolvida com o valor "444", logo ela é resolvida
var p5 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// Esse será considerada como se o iterável passado contém apenas o valor de rejeição "555" da promise, logo ela é rejeitada
var p6 = Promise.all([1, 2, 3, Promise.reject(555)]);

// Utilizando setTimeout para executar código depois que a pilha estiver vazia
setTimeout(function () {
  console.log(p4);
  console.log(p5);
  console.log(p6);
});

// logs
// Promise { <estado>: "resolvida", <valor>: Array[3] }
// Promise { <estado>: "resolvida", <valor>: Array[4] }
// Promise { <estado>: "rejeitada", <razão>: 555 }
