const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }

]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length) // Expected 8.55

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length) // Expected 8.55

/**
 * ?PROGRAMAÇÃO IMPERATIVA, DECLARATIVA E REATIVA
 * 
 *? 1 - Programação Imperativa OU PROCEDURAL:
 * 
 * Nesse paradigma, o foco está em descrever detalhadamente o passo a passo 
 * de um processo que a máquina deve executar.
 * As instruções são passadas por meio de códigos na sequência que devem ser executadas.
 * Linguagens como PHP, Java, Lua e Python seguem esse paradigma.
 * No entanto, a programação imperativa pode ser complexa e não é indicada para aplicações 
 * que precisam de manutenção frequente.
 * 
 *? PROGRAMAÇÃO DECLARATIVA:
 * 
 * Nesse estilo, o objetivo é demonstrar o resultado esperado do código, sem se preocupar 
 * com os detalhes de como esse resultado será gerado. 
 * A sintaxe é mais abstrata e baseada em lógicas imutáveis.
 * Um exemplo comum de linguagem declarativa é a SQL, usada para declarar consultas 
 * ao banco de dados.Aqui, você diz “o que deve ser feito” em vez de “como fazer”.
 * 
 ** Em resumo, a programação imperativa detalha o processo passo a passo, enquanto a 
 ** programação declarativa foca no resultado desejado. Ambos os estilos têm seus usos
 **  e vantagens, dependendo do contexto.
 * 
 *? PROGRAMAÇÃO REATIVA
 * 
 * O paradigma Reativo tem seu nome derivado de reação, ou seja, é uma forma de programar 
 * a eventos ou alterações nos estados da aplicação. 
 * Com isso, a sintaxe do código e as funções executadas pelo programa sempre são feitas 
 * de forma que respondam a possíveis ações interpretadas pela máquina.
 * 
 * O paradigma Reativo, atualmente, é utilizado principalmente no desenvolvimento de 
 * aplicativos para Android, já que a natureza do sistema permite um melhor uso de sintaxes
 * feitas com base em situações que ocorram durante o uso de um programa. 
 * Além disso, a famosa linguagem de programação JavaScript, que conta com funções multi-paradigmas,
 * têm a biblioteca React implementada, permitindo esse tipo de desenvolvimento nela.
 * 
 * "Podemos dizer que todas as ações da programação reativa são respostas a algum evento, diferente 
 * do paradigma imperativo onde as ações acontecem seguindo um script, com regras fixas do que deve 
 * acontecer e em que momento. Portanto, elas são construídas por reações às alterações nos fluxos de dados. 
 * Uma das vantagens é que as aplicações reativas tendem a ser escaláveis, uma vez que todos os processos 
 * são fundamentados em cima de eventos não-bloqueantes, já ela tem como premissa lidar com processo que 
 * não sobrecarregue ou bloqueie a utilização dos recursos” afirma Maurício Girardello, Head de Tecnologia
 * da Kenzie Academy, sobre esse tipo de abordagem.
 * 
 * A programação reativa é um paradigma de programação que se concentra em lidar com fluxos de dados a
 * ssíncronos e eventos. Essa abordagem visa criar sistemas mais eficientes, resilientes e responsivos,
 * especialmente em ambientes onde a concorrência e a escalabilidade são desafios importantes1. 
 * Aqui estão algumas características-chave da programação reativa:
 * 
 ** 1 - Fluxos de Dados Assíncronos:
 * - A programação reativa lida com fluxos de dados que podem ocorrer de forma não sequencial e independente.
 * - Esses fluxos (também chamados de streams) podem incluir eventos, mensagens, chamadas de API e até mesmo erros.
 * 
 ** 2 - Não-Bloqueante e Responsivo: 
 * - A abordagem reativa utiliza processos não-bloqueantes, evitando gargalos e bloqueios de recursos computacionais.
 * - Isso resulta em maior escalabilidade e responsividade natural da aplicação.
 * 
 ** 3 - Tratamento Eficiente de Erros:
 * - Mecanismos naturais, como o uso de backpressure para controlar o fluxo de dados, 
 *   tornam o tratamento de erros mais eficiente.
 * - Notificações de erro também são tratadas como eventos dentro dos fluxos de dados.
 * 
 * Em resumo, a programação reativa oferece vantagens significativas, como escalabilidade, 
 * eficiência e tratamento robusto de erros. 
 * Ela é amplamente usada em bibliotecas como o RxJS para desenvolvimento web e outras aplicações.
 * 
 * TODO Sse the links:]
 * 
 ** https://canaltech.com.br/mercado/quais-as-diferencas-entre-programacao-imperativa-declarativa-e-reativa-212715/
 * 
 ** https://pt.stackoverflow.com/questions/127121/o-que-caracteriza-a-programa%C3%A7%C3%A3o-imperativa-e-funcional
 * 
 ** https://rxjs.dev/guide/overview
 * 
 ** https://cosasdigitales.com/articulos-diseno-web/javascript-programacion-declarativa-vs-imperativa/
 * 
 ** https://stackovercoder.com/programming/33655534/difference-between-declarative-and-imperative-in-react-js
 * 
 */