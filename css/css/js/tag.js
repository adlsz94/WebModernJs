// AULA 239 - CRIANDO A CLASSE TAG

// Objeto de cores
const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161', // Cor padrão para tags não listadas.
    
    // Método para obter a cor
    get(tag) {
        // Retorna a cor específica da tag ou a cor padrão se não encontrar.
        return this[tag] ? this[tag] : this.padrao
    }


}


// Seleciona todos os elementos com a classe 'tag'
document.querySelectorAll('.tag').forEach(elemento => {
    // Obtém o nome da tag do elemento em minúsculas (ex.: 'div', 'p', 'span').
    const tagName = elemento.tagName.toLowerCase()
    // Define a cor da borda dp elemento para um cinza escuro
    elemento.style.borderColor = colors.get(tagName)
    // Verifica se o elemento não possui a classe 'nolabel'
    if (!elemento.classList.contains('nolabel')) {
        // Se não tiver a classe 'nolabel', o código abaixo é executado:

        // Cria um novo elemento <label>
        // Aplica a cor dinamicamente no label
        // o fundo do label também usa a cor vinda do objeto 'colors'
        const label = document.createElement('label')
        
        // Define a cor de fundo da nova label
        label.style.backgroundColor = colors.get(tagName)
        // Define o texto da label para ser o nome da tag(ex.: 'div')
        label.innerHTML = tagName
        // Insere a nova label como o primeiro filho do elemento atual
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})