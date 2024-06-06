const alunos1 = [
    {name: 'João', nota: 7.3, bolsista: false},
    {name: 'Maria', nota: 9.2, bolsista: true},    
    {name: 'Pedro', nota: 9.8, bolsista: false},
    {name: 'Ana', nota: 8.7, bolsista: true},    
]

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista

console.log(alunos1.map(a => a.bolsista).reduce(todosBolsistas)) // return false, pois nem todos são bolsistas.

// Desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista

console.log(alunos1.map(a => a.bolsista).reduce(algumBolsista)) // return true, pois alguem aluno é bolsista.