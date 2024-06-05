/**
 * TODO: See the link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

const alunos = [
    {name: 'João', nota: 7.3, bolsista: false},
    {name: 'Maria', nota: 9.2, bolsista: true},    
    {name: 'Pedro', nota: 9.8, bolsista: false},
    {name: 'Ana', nota: 8.7, bolsista: true},    
]
console.log(alunos.map(a => a.nota)) // Return [ 7.3, 9.2, 9.8, 8.7 ]
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)  // return 10 7.3
    return acumulador + atual
}, 10)                              // Acumulador
/**
 * return 17.3 9.2
 *        26.5 9.8
 *        36.3 8.7
 */

console.log(resultado) // 45