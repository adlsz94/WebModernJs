/**
 *? Promise.prototype.catch
 * 
 * O método catch() retorna uma Promise e lida apenas com casos rejeitados. 
 * Ele possui o mesmo comportamento de quando chamamos
 * Promise.prototype.then(undefined, onRejected). See the link below:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 * 
 * De fato, chamando obj.catch(onRejected), internamente é chamado obj.then(undefined, onRejected).
 * 
 *? Sintaxe 
 */
/**
**    p.catch(onRejected)
*    
**    p.catch(function(motivo){
**        //rejected
**    })
*/
/**
 *? Parâmetros
 * 
 ** 
 ** onRejected
 * Uma Function chamada quando a Promise é rejeitada.
 * Esta function possui um argumento: razão da rejeição,
 *  reason of rejection. O motivo da rejeição.
 * 
 *! A Promise retornada pelo catch() é rejeitada apenas se 
 *! onRejected cospe um erro ou se o retorno da Promise foi
 *! rejeitado por si mesmo, ou seja, foi resolvida.
 * 
 ** Valor de retorno
 * 
 * Internamente chamamos Promise.prototype.then sobre o objeto 
 * que é chamado passando parâmetros como undefined e orRejected
 * no manipulador de eventos.
 * Então retornamos o valor da chamada que é Promise.
 * 
 */

 /**
  *! Aviso: O exemplo abaixo está cuspindo uma string. 
  *! Isso é considerado uma má prática. 
  *! Sempre cuspir uma instance de erro (Error). 
  *! Em todo caso, a parte que faz a captura deve fazer 
  *! verificaçoes sobre os argumentos para saber se é 
  *! uma string ou um erro e você poderá perder informações 
  *! valiosas como stack traces.
  * 
  */

  // Demonstração de uma camada interna:
 // Sobrescrevendo o techo original de  Promise.prototype.then/catch adicionando alguns logs
/**
**    (function (Promise) {
**        var originalThen = Promise.prototype.then;
**        var originalCatch = Promise.prototype.catch;
*      
**        Promise.prototype.then = function () {
**          console.log(
**            "> > > > > > chamando .then em %o com argumentos: %o",
**            this,
**            arguments,
**          );
**          return originalThen.apply(this, arguments);
**        };
 **       Promise.prototype.catch = function () {
**          console.log(
**            "> > > > > > chamando .catch em %o com argumentos: %o",
**            this,
**            arguments,
**          );
**          return originalCatch.apply(this, arguments);
**        };
**      })(this.Promise);
      
**      // chamando um catch em uma Promise já resolvida.
**      Promise.resolve().catch(function XXX() {});
      
**      // logs:
**      // > > > > > > chamando .catch na Promise{} com os argumentos: Arguments{1} [0: function XXX()]
**      // > > > > > > chamando .then na Promise{} com os argumentos: Arguments{2} [0: undefined, 1: function XXX()]
*/

/**
 *? Description
 * 
 * O método catch pode ser útil para manipulação de erros na composição da sua promisse.
 * 
 *? Exemplos 
 */

 // Usando o método catch
 let p1 = new Promise(function (resolve, reject) {
    resolve("Sucesso");
  });
  
  p1.then(function (value) {
    console.log(value); // "Sucesso!"
    throw "Ah, não!";
  })
    .catch(function (e) {
      console.log(e); // "Ah, não!"
    })
    .then(
      function () {
        console.log("Após um catch, a sequencia é restaurada");
      },
      function () {
        console.log("Não engatilhado devido ao catch");
      },
    );
  
  // O seguinte se comporta da mesma maneira que o anterior
  p1.then(function (value) {
    console.log(value); // "Sucesso!"
    return Promise.reject("Ah, não!");
  })
    .catch(function (e) {
      console.log(e); // "Ah, não!"
    })
    .then(
      function () {
        console.log("Após um catch, a sequencia é restaurada");
      },
      function () {
        console.log("Não engatilhado devido ao catch");
      },
    )
  
/**
 *? Especificações
 * 
 ** ECMAScript® 2025 Language Specification
 ** # sec-promise.prototype.catch
 * 
 ** https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.catch
 * 
 */