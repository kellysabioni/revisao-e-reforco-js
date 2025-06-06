// 03-funcoes.js
'use strict';

exemplo1(); // chamada da função

/* Sintaxe tradicional, função nomeada 
A ordem de declaração da função neste caso NÃO IMPORTA */
function exemplo1(){
    console.log("Função nomeada");
}

exemplo1(); // chamada da função


function separador(){
    console.log("\n********************************\n");
}

separador();

// Chamada aqui dá erro, pois não pode ser feita antes da declaração
// exemplo2(); 

/* Sintaxe tradicional, função anônima
Nesta sintaxe, a ordem de declaração IMPORTA. */
const exemplo2 = function(){
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

var conta01 = exercicio01(112 , 50);
var conta02 = exercicio01(30 , 56);

console.log(`Usando função nomeada`)
console.log(` Resultado da conta, exemplo 01 é igual ${conta01}`);
console.log(` Resultado da conta, exemplo 02 é igual ${conta02}`);

separador();

// Opção 2
const exercicio02 = function ( valor1, valor2 ){
    return valor1 - valor2;
};

var conta03 = exercicio02(100, 25);
var conta04 = exercicio02(15, 45);

console.log(`Usando função anônima`)
console.log(` Resultado da conta, exemplo 03 é igual ${conta03}`);
console.log(` Resultado da conta, exemplo 04 é igual ${conta04}`);

separador();