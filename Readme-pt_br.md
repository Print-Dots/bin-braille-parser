<p align="center">
  <h1 align="center">Binary Braille Parser</h1>
</p>

*Este Readme possui um [versão em Inglês](./Readme.md) (en-us).*

[![npm version](https://badge.fury.io/js/bin-braille-parser.svg)](https://badge.fury.io/js/bin-braille-parser)
![npm downloads](https://img.shields.io/npm/dt/bin-braille-parser)

## Como funciona
O Braille binário, um apelido BinBraille, é uma abstração do Braille convencional, no Braille cada letra, simbolo ou numero é representado por 6 pontos possiveis, e com a combinação desses 6 pontos possiveis, é criado um caracter, olhe um exemplo:

![Image of the braille](https://a.storyblok.com/f/74682/228x109/030c357a8c/braille-example.png)

No Braille binário, alteramos os pontos marcados por 1 e, onde não marcamos nada, colocamos 0; para essa variação de zeros e um, a abstração é chamada de Braille binário.
O mesmo padrão de letras na imagem acima ficaria assim no sistema Binary Braille:

````js
[ "1", "0" ],  [ "1", "0" ],  [ "1", "1" ],  [ "1", "1" ]
[ "0", "0" ],  [ "1", "0" ],  [ "0", "0" ],  [ "0", "1" ]
[ "0", "0" ],  [ "0", "0" ],  [ "0", "0" ],  [ "0", "0" ]
     a              b		   c		  d
````

## Cobertura

Até o momento, a cobertura de caracteres está em todo o alfabeto, numeros, caracteres simples, caracteres complexos e simbolos:
````bash
(",", ";", ":", "?", "!", "@", "-", "*", "&", "$", ">", "<", "=", "+", "/", "%", "©")
````
No entanto, ainda não suporta especificidades de outros idiomas.

## Confira a demo

Siga para [este site](http://binary-braille-demo.surge.sh) você poderá testar todos os recursos do parser.

## Instalação

#### Via npm ou yarn

```bash
npm i bin-braille-parser # ou yarn add bin-braille-parser
```

## Aviso
Esse analisador segue o idioma Braille no padrão brasileiro. Se você deseja contribuir com a conversão para outros idiomas, sinta-se à vontade e envie seu Pull request. [**Verifique este documento oficial de suporte ao idioma.**](http://portal.mec.gov.br/docman/dezembro-2018-pdf/104041-anexo-grafia-braille-para-lingua-portguesa/file)

## Como usar

```js
const parserTextToBinBraille = require('bin-braille-parser')

parserTextToBinBraille("Jonh snow")

/* The return is
 [ 
  [ [ '0', '1' ], [ '0', '0' ], [ '0', '1' ] ], Caractere para indicar que a próxima letra será maiúscula.
  [ [ '0', '1' ], [ '1', '1' ], [ '0', '0' ] ], J
  [ [ '1', '0' ], [ '0', '1' ], [ '1', '0' ] ], o
  [ [ '1', '1' ], [ '0', '1' ], [ '1', '0' ] ], n
  [ [ '1', '0' ], [ '1', '1' ], [ '0', '0' ] ], h
  [ [ '0', '0' ], [ '0', '0' ], [ '0', '0' ] ], 
  [ [ '0', '1' ], [ '1', '0' ], [ '1', '0' ] ], s
  [ [ '1', '1' ], [ '0', '1' ], [ '1', '0' ] ], n
  [ [ '1', '0' ], [ '0', '1' ], [ '1', '0' ] ], o
  [ [ '0', '1' ], [ '1', '1' ], [ '0', '1' ] ]  w
  ]
*/

```

## Rodando os testes

```bash
npm run test #ou yarn test
```

----

<p align="center">
  <h5 align="center">Contribua com este projeto, mande idéias e sugestões em nossas <a href="https://github.com/Print-Dots/bin-braille-parser/issues" title="Link para as issues do projeto no Github">
  issues !</a></h5>
</p>
