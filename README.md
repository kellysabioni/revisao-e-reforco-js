# Atividades de revisão e reforço de JavaScript

## Sobre escopo de variáveis e constantes

- `var`: escopo GLOBAL
- `let`: escopo BLOCO, podendo ser GLOBAL dependendo de onde declarada
- `const`: escopo BLOCO, podendo ser GLOBAL dependendo de onde declarada. Obs.: **obrigatório** inicializar com algum valor.

---

## Módulos no JavaScript

Existem duas formas de uso:

- Módulos CJS: mecanismo mais antigo, usa `module.exports` e `require` associado à uma constante.
- Módulos ESM: mecanismo atual, usa `export` e `import`.

**Obs.:** recomendável criar na raíz o `package.json` contendo:

```json
{
  "type": "module"
}
```

---

## Sobre os operadores REST e SPREAD (...)

### Operador SPREAD (...)

O operador spread é usado para espalhar os elementos de arrays ou objetos. Ele copia ou combina dados de forma simples. É útil para clonar estruturas ou passar itens como argumentos de função. Exemplo: [...array] ou {...objeto}. Ele desmonta a estrutura original.

### Operador REST (...)

O operador rest é usado para juntar vários valores em um array ou objeto. Ele coleta os "restantes" dos dados. Muito usado em funções para aceitar número variável de argumentos. Exemplo: function(...args). Ele agrupa os dados em uma nova estrutura.

---

## Sobre desestruturação

A **desestruturação** em JavaScript é uma forma prática de **extrair valores de arrays ou propriedades de objetos** e atribuí-los diretamente a variáveis.

### Para que serve?

Ela **simplifica o código**, evitando a repetição e deixando a leitura mais clara.

### Exemplos:

#### 1. Desestruturação de array:

```js
const numeros = [10, 20, 30];
const [a, b] = numeros;
console.log(a); // 10
console.log(b); // 20
```

#### 2. Desestruturação de objeto:

```js
const pessoa = { nome: "Ana", idade: 25 };
const { nome, idade } = pessoa;
console.log(nome); // Ana
console.log(idade); // 25
```

### Resumo:

A desestruturação serve para **pegar partes de um array ou objeto** e **armazenar em variáveis com menos código**. É muito útil com funções, parâmetros, APIs e estados em React.
