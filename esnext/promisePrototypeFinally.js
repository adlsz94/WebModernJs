/**
 *? Promise.prototype.finally
 * 
 ** finally() is an ECMAScript 2018 feature.
 * 
 * TODO: See the links below:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally
 * 
 ** https://www.w3schools.com/jsref//jsref_promise_finally.asp
 * 
 * O método finally() retorna uma Promise. Quando a promise for estabelecida,
 * tenha ela sido realizada ou rejeitada, executa-se a função callback específicada.
 * Isso permite a execução de um código que acontecerá independentemente da Promise 
 * ter sido realizada (com sucesso) ou rejeitada (com falha).
 * 
 * Assim, você pode evitar a duplicação do código em ambos os handlers then() e catch() 
 * da Promise.
 * 
 *! Observação: O termo "handler" em programação refere-se a uma função ou bloco de código
 *! que é responsável por gerenciar eventos ou ações específicas dentro de um sistema.
 *! Um handler é um mecanismo que permite que um programa responda a eventos.
 * 
 *? promise.prototype.finally - Sintaxe
 * 
 ** p.finally(function() {
 **      // conluída(realizada ou rejeitada) 
 ** })
 * 
 *? Parâmetros
 * 
 ** quandoEstabelecia
 *      Uma Funcion chamada quando a Promise é concluída.
 * 
 *? Valor de retorno
 * 
 * Retorna um Promise onde o manipulador finally é definido
 * como a função especificada, quandoEstabelecida.
 * 
 *? Descrição
 * 
 * O método finally() pode ser útil quando você deseja realizar
 * algum tipo de processamento ou limpeza quando a promise for 
 * estabelecida, independentemente de seu resultado (sucesso ou falha).
 * O método finally() é bastante similar a chamar
 * .then(quandoEstabelecida, quandoEstabelecida).
 * Porém,existem algumas diferenças:
 * 
 **  - Ao passar a função na linha (entre os parâmetros do método), você
 **    precisa passá-la apenas uma vez, ao invés de ser forçado a
 **    declará-la duas vezes ou a definir em um variável.
 * 
 **  - O callback de finally não poderá receber nenhum argumento, 
 **    já que não existem meios confiáveis de determinar se a promise
 **    foi realizad ou rejeitada.
 **    Seu uso é para quando você realmente não se importa com os possíveis
 **    motivos de uma falha ou possíveis valores retornados de um sucesso,
 **    não tendo, portanto, razão para fornecê-lo.
 * 
 ** - Diferentemente de
 **    Promise.resolve(2).then(() => {}, () => {}) (será resolvido como undefined),
 **    Promise.resolve(2).finally(() => {}) será relovido como 2.
 *    
 **  - De maneira semelhante, diferentemente de 
 **    Promise.reject(3).then(() => {}, () => {}) (que será resolvido como undefined), 
 **    Promise.reject(3).finally(() => {}) será rejeitado como 3.  
 *
 *? Nota: 
 *! Um throw ( ou retorno de uma promise rejeitada) no callback de finally rejeitará
 *! a nova promise com a razão de rejeição especificada na chamada de throw().
 *
 *? Exemplos
 * 
 */

 /**
**    let carregando = true
*   
**    fetch(minhaRequisicao) // a funçtion minhaRequisicao precisa ser implementada
**       .then(function(resposta) {
**           let tipoConteudo = Response.headers.get('content-type')
**           if (tipoConteudo && tipoConteudo.includes('application/json')) {
**               return resposta.json()
**           }
**           throw new TypeError('O conteúdo não é um JSON.')
**       })
*   
**       .then(function(json) {
**           // processamento do seu JSON
**       })
*   
**       .catch(function(err) {
**           console.log('Um erro ocorreu:', err)
**       })
*       
**       .finally(function() {
**           carregando = false
**          // console.log('Carregamento finalizado:', carregando)   
**          // Mostra que o carregamento foi concluído.
**       })
* 
* Especificações
*
* TC39 proposal
*
* TODO: See the links below:
*
*https://github.com/tc39/proposal-promise-finally
*
*/