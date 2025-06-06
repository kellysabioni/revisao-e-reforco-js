// 03-funcoes.js
"use strict";

exemplo1(); // chamada da função

/* Sintaxe tradicional, função nomeada 
A ordem de declaração da função neste caso NÃO IMPORTA */
function exemplo1() {
  console.log("Função nomeada");
}

exemplo1(); // chamada da função
function separador() {
  console.log("\n********************************************\n");
}
separador();

// Chamada aqui dá erro, pois não pode ser feita antes da declaração
// exemplo2();

/* Sintaxe tradicional, função anônima
Nesta sintaxe, a ordem de declaração IMPORTA. */
const exemplo2 = function () {
  console.log("Função anônima");
};

exemplo2(); // chamada (sempre após declarar a função anônima)

separador();

// MINI-EXERCÍCIOS

/* 1) Crie uma função (qualquer sintaxe) que receba dois valores
numéricos como parâmetros, calcule a diferença entre estes valores
e retorne o resultado calculado. */

/* 2) Chame esta função pelo menos duas vezes passando valores diferentes
e guardando os resultados em variáveis de escopo global. */

/* 3) Apresente os resultados no console. */

// Opção 1
function exercicio01(valor1, valor2) {
  let resultado = valor1 - valor2;
  return resultado;
}

let conta01 = exercicio01(112, 50);
let conta02 = exercicio01(30, 56);

console.log(`Usando função nomeada`);
console.log(`  Resultado da conta, exemplo 01 é igual ${conta01}`);
console.log(`  Resultado da conta, exemplo 02 é igual ${conta02}`);

separador();

// Opção 2
const exercicio02 = function (valor1, valor2) {
  return valor1 - valor2;
};

let conta03 = exercicio02(100, 25);
let conta04 = exercicio02(15, 45);

console.log(`Usando função anônima`);
console.log(`  Resultado da conta, exemplo 03 é igual ${conta03}`);
console.log(`  Resultado da conta, exemplo 04 é igual ${conta04}`);

separador();

/* Sintaxe moderna, função flecha/seta (arrow function)
Nesta sintaxe, a ordem de declaração IMPORTA. */
const exemplo3 = () => {
  console.log("Arrow function");
};

exemplo3(); // chamada deve ser feita após a declaração

const saudacaoCompleta = (nome) => {console.log(`Olá, ${nome}! `);};

saudacaoCompleta("João Pedro");
saudacaoCompleta("Alana");
saudacaoCompleta("Gabriel");

separador();

/* Quando a função tem SOMENTE UM parâmetro, podemos remover os parenteses.
E quando ela faz SOMENTE UMA AÇÃO (ideal), podemos remover as chaves e deixar em uma linha*/

const saudacao = nome => console.log(`Olá, ${nome}!`);

saudacao("Ana");
saudacao("Juliana");
saudacao("Gabriela");

separador();

// COM RETORNO EXPLÍCITO
const calcularMetadeCompleta = (valor) => {
  return valor / 2;
};
console.log(calcularMetadeCompleta(10));

// COM RETORNO IMPLÍCITO
const calcularMetade = (valor) => valor / 2;
console.log(calcularMetade(10));

separador();

// Exercicio de refatoração
/* 1) Reescreva a função do exercício anterior usando a sintaxe de arrow function */
/* 2) Teste fazendo novas chamadas e novas saídas */

const exercicio03 = (valor1, valor2) => console.log(`Exercício 3 !!! Resultado de ${valor1} menos ${valor2} é igual ${valor1 - valor2}`);

 exercicio03(1348.69, 123.45);
 exercicio03(50, 75);

separador();
