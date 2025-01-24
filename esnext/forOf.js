/**
 *? For of
 * 
 * TODO: See the links below:
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
 * 
 * 
 * 
 */

 //iterando em cima de uma string
 for (let letra of 'Cod3r') {
    console.log(letra) // imprime cada letra da string 'Cod3r'
 }

 const assuntosEcma = ['Map', 'Set', 'Promise' ]
 for (let i in assuntosEcma) {
    console.log(i) // imprime cada index do array: 0
 }                //                               1
                 //                                2
// percorrendo os valores
for (let assunto of assuntosEcma) {
    console.log(assunto) // imprime cada assunto do array: Map, Set, Promise
 
}

// Criando um map
// TODO: See the links below:
//* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto) 
}
/**
 * Percorre o array e imprime cada assunto do array: Map, Set, Promise, e suas respectivas
 * chaves e valores:
 * 
 ** [ 'Map', { abordado: true } ]
 ** [ 'Set', { abordado: true } ]
 ** [ 'Promise', { abordado: false } ]
 * 
 */
// Percorrendo apenas as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave) // imprime cada chave do map: Map, Set, Promise
}

// Percorrendo apenas os valores
for (let valor of assuntosMap.values()) {
    console.log(valor) // imprime cada valor do map: { abordado: true }, { abordado: true }, { abordado: false }
}

// Percorrendo as entradas(entries)
// destructing
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}
/**
 * imprime cada entrada do map:
 * 
 ** Map, { abordado: true } 
 ** Set, { abordado: true } 
 ** Promise, { abordado: false }
 * 
 */