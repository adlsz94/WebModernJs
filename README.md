# Comandos utilizados

## Install lodash and install nodemon

$ npm i lodash
$ npm i -g nodemon

## Usando nodemon

$ nodemon usandoModulosTerceiros.js

## Sobre o package.json

O arquivo package.json é um arquivo que contém informações sobre o projeto, como o nome, versão.
{
  "name": "funcionarios",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "axios": "^1.7.2"
  }
}

INSTALAR AXIOS

Para instalar o Axios como uma dependência de desenvolvimento, você pode usar o npm ou o yarn com a flag --save-dev ou -D. Aqui estão os comandos para ambos:

Usando npm:

Com dempendência de desenvolvimento:
npm install axios --save-dev

Sem dempendência de desenvolvimento:
npm install axios


Usando yarn:

Com dempendência de desenvolvimento:
yarn add axios --dev

Sem dempendência de desenvolvimento:
yarn add axios

Isso adicionará o Axios ao seu arquivo package.json na seção devDependencies, indicando que é uma dependência usada apenas durante o desenvolvimento.

Quando um versão possui:
"axios": "^1.7.2, este ' ^ ', significa que a versão não poderá ser atualizada acima da versão 1.7.3,
mas poderá atualizar para versões que aumentem somente o valor do meio, como por exemplo, para a versão
1,8.1, 1.9.1 e não para 2.0.1 .

"axios": "~1.7.2" - este '~' significa que a versão pderá atualizar da versão "1.7.2" até a versão "1.7.9" e não poderá 
atualizar para a versão 1.8.0.

"axios": "1.7.2" - sem "~" e sem "^", significa que somente a versão "1.7.2" será usada ou baixada ou instalado no projeto.