// AULA 189

/**
 *? PROMISE
 * 
 * TODO: See the links below:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 ** USANDO PROMISES
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 * 
 * https://www.freecodecamp.org/portuguese/news/tutorial-de-promises-do-javascript-resolve-reject-e-encadeamento-em-js-e-na-es6/
 * 
 *? Promise
 * 
 * O object Promise representa a eventual conclusão (ou falha) de uma operação
 *  assíncrona e seu valor resultante.
 * Para saber como as promises funcionam e como você pode usá-las, recomendamos que você leia 
 ** Usando promises, no link abaixo:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises
 * 
 *? Descrição
 * 
 * Uma Promise é um proxy para um valor não necessariamente conhecido quando 
 * a promise é criada. 
 * Ele permite que você associe manipuladores ao valor de sucesso ou motivo de
 * falha de uma ação assíncrona. 
 * Isso permite que métodos assíncronos retornem valores como métodos síncronos:
 * em vez de retornar imediatamente o valor final, o método assíncrono retorna 
 * uma promise para fornecer o valor em algum momento no futuro.
 * 
 * Uma Promise está em um destes estados:
 * 
 ** pending: estado inicial, nem cumprido nem rejeitado.
 ** fulfilled: significa que a operação foi concluída com sucesso.
 ** rejected: significa que a operação falhou.
 * 
 * O estado eventual de uma promise pendente pode ser fulfilled com um valor 
 * ou rejected com um motivo (erro). 
 * Quando uma dessas opções ocorre, os manipuladores associados enfileirados 
 * pelo método 'then' de uma promise são chamados. 
 * Se a promise já tiver sido cumprida ou rejeitada quando um manipulador 
 * correspondente for anexado, o manipulador será chamado, portanto, 
 * não há condição de corrida entre a conclusão de uma operação assíncrona 
 * e a anexação de seus manipuladores.
 * 
 * Uma promise é considerada resolvida se for cumprida ou rejeitada, mas não pendente.
 * 
 * Você também ouvirá o termo resolved usado com promises — isso significa que a promise 
 * é liquidada ou "bloqueada" para corresponder ao estado eventual de outra promise 
 * e resolvê-la ou rejeitá-la não tem efeito. 
 * O documento Estados e destinos da proposta original da Promise contém mais detalhes 
 * sobre a terminologia da promise. Coloquialmente, promises "resolvidas" geralmente 
 * são equivalentes a promises "cumpridas", mas, conforme ilustrado em
 *  "Estados e destinos" - (veja esnext/image/promises.png), 
 * as promises resolvidas também podem estar pendentes ou rejeitadas. 
 * Por exemplo:
 */

 new Promise((resolveOuter) => {
    resolveOuter(
      new Promise((resolveInner) => {
        setTimeout(resolveInner, 1000);
      }),
    );
  });
/**
 * Essa promise já está resolvida no momento em que é criada 
 * (porque o resolveOuter é chamado de forma síncrona), mas é 
 * resolvido com outra promise e, portanto, não será cumprida 
 * até 1 segundo depois, quando a promise interna for cumprida. 
 * Na prática, a "resolução" muitas vezes é feita nos bastidores 
 * e não observável, e apenas o seu cumprimento ou rejeição o são.
 * 
 *! Nota: 
 *! Várias outras linguagens têm mecanismos para avaliação preguiçosa 
 *! e adiamento de uma computação, que eles também chamam de "promises",
 *! por exemplo, Esquema. 
 *! As promises em JavaScript representam processos que já estão acontecendo,
 *! que podem ser encadeados com funções de retorno de chamada. 
 * Se você deseja avaliar lentamente uma expressão, 
 * considere usar uma função sem argumentos, por exemplo. 
 * 
 ** f = () => expressão para criar a expressão avaliada lentamente 
 * e 
 ** f() para avaliar a expressão imediatamente.
 * 
 *? Promises em cadeia
 * 
 * Os métodos:
 * 
 **  Promise.prototype.then(), 
 **  Promise.prototype.catch() 
 ** e Promise.prototype.finally(),
 * são usados para associar uma ação adicional com uma promise que se torna liquidada. 
 * Como Promise.prototype.then() e Promise.prototype.catch() métodos retornam promises, 
 * eles podem ser encadeados.
 * TODO: See the links below:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
 * 
 * O método .then() aceita até dois argumentos; 
 * o primeiro argumento é uma função de retorno de chamada para o caso cumprido da promise 
 * e o segundo argumento é uma função de retorno de chamada para o caso rejeitado. 
 * Cada .then() retorna um objeto de promise recém-gerado, que pode ser usado opcionalmente
 * para encadeamento; 
 * Por exemplo:
 * 
 */

const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
//    reject('somethig is wrong'); testando isto
 });

let handleFulfilledA = resolvido => resolvido
let handleRejectedA = rejected => rejected
let handleFulfilledB = resolvido => resolvido
let handleRejectedB = rejected => rejected
let handleFulfilledC = resolvido => resolvido
let handleRejectedC = rejected => rejected


minhaPromise
    
    .then(handleFulfilledA, handleRejectedA)
    .then(handleFulfilledB, handleRejectedB)
    .then(handleFulfilledC, handleRejectedC)
    .then(console.log) // returns foo

let p = new Promise(function(cumprirPromessa) { //promise pending state
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])// Promise resolved with array of strings
    
})
const elementosDoArray = elementos => elementos

const primeiroElemento = arrayOuString => arrayOuString[0] 

const primeiraLetra = string =>string[0]

const letraMinuscula = letra => letra.toLowerCase() // trasform uppercase to lowercase

p   
    .then(elementosDoArray) // O método .then() retorna um novo promisse com os elementos do array:
                            //            ['Ana', 'Bia', 'Carlos', 'Daniel']

    .then(primeiroElemento) // O método.then() retorna um novo Promise com o primeiro elemento do array[0], que é 'Ana'
    .then(primeiraLetra) // Retorna um novo Promise: 'A'
    .then(letraMinuscula) // Retorna um novo Promise: 'a
//    .then(valor => console.log(valor))// Esta function será chamado  quando cumprirPromessa for cumprida
//     semelhante ao anterior :
    .then(console.log) // Expect output: a
