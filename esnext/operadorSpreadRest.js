// AULA 178

// operador ... rest(juntar)
// operador ... rest(espalhar)

// Usar spread com objeto
const funcionario = { nome: 'Maria,', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone) // Expected output { ativo: true, nome: 'Maria,', salario: 12348.99 }

// Usar spread com array
const grupoA = [ 'João', 'Pedro', 'Glória' ]
const grupoFinal = [ 'Maria', ...grupoA, 'Rafaela' ]
console.log(grupoFinal) // Expected output [ 'Maria', 'João', 'Pedro', 'Glória', 'Rafaela' ]