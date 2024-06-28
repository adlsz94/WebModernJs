// console.log(global)
// Mostrando a possibilidade de colocar um objeto para o escopo global
global.MinhaApp = Object.freeze({ // Isto coloca a MinhaApp acessível globalmente.
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
} )

/**
 *! Este exemplo é somente para demonstrar a possibilidade de colocar um objeto 
 *! no escopo global. 
 *! No entando, use o padrão module.exports para fazer isto e evitar de 
 *! misturar objetos no escopo global, fugindo ao padrão e podendo criar problemas 
 *! no código.
 */