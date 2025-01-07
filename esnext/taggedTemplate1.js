// AULA 179
// Tagged Template - Processa o template dentro uma function
function tag(partes, ...valores) {
    console.log(partes) // expected output [ '', ' está ', '' ]
    console.log(valores) // expected output [ 'Gul', 'Aprovado' ]
    return 'Outra string'
}

const aluno = 'Gul'
const situação = 'Aprovado'
console.log( `${aluno} está ${situação}.`) //expecte output Gul esá Aprovado.
console.log(tag `${aluno} está ${situação}.`) //expecte output [ '', ' está ', '.' ]
                                             //                [ 'Gul', 'Aprovado' ]
                                             //                Outra string
