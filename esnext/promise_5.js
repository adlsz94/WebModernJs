/**
 * TODO SEE THE LINKS:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
 * 
 */

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else{
                resolve(valor)
            }
            
        } catch(error){
            reject(error)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        V => consol.log(`Valor: ${V}`),
        err => console.log(`Erro Especifico: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`)) // Após o catch nenhum valor será obido.
    .then(() => console.log('Fim'))

    /**
     *! Cuidado ao colocar tratamento de erro no meio dos .then e antes do .catch, pois o 
     *! resultado é que não será possível fazer o encadeamento entre os .then, ou seja, não 
     *! será passado os valores de um .then para outro .then.
     *! Normalmente, o .cath é utilizado no final dos encadeamentos dos .then.
     * 
     */