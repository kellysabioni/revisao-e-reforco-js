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
function calcularDiferenca( valor1, valor2 ){
    return valor1 - valor2;
}

/* 2) Chame esta função pelo menos duas vezes passando valores diferentes
e guardando os resultados em variáveis de escopo global. */
let resultado1 = calcularDiferenca(10, 125);
let resultado2 = calcularDiferenca(1250.7, -12);


/* 3) Apresente os resultados no console. */
console.log(resultado1);
console.log(resultado2);
console.log( calcularDiferenca(100, 50) );


separador();


/* Sintaxe moderna, função flecha/seta (arrow function)
Nesta sintaxe, a ordem de declaração IMPORTA. */
const exemplo3 = () => {
    console.log("Arrow Function");
};

exemplo3(); // Chamada deve ser feita após a declaração

/* Quando a função tem SOMENTE UM parâmetro, podemos
remover os parênteses. E quando ela faz SOMENTE UMA ÚNICA ação (ideal), podemos remover as chaves e deixar em uma linha. */
const saudacao = nome => console.log("Olá "+nome);

saudacao("João Pedro");
saudacao("Alana");
saudacao("Gabriel");

separador();

// Com retorno EXPLÍCITO
const calcularMetadeSintaxeCompleta = (valor) => {
    return valor / 2;
}
console.log(calcularMetadeSintaxeCompleta(10));

// Com retorno IMPLÍCITO
const calcularMetade = valor => valor / 2;
console.log(calcularMetade(10));

separador();

// Exercício de Refatoração

/* 1) Reescreva a função do exercício anterior usando a sintaxe de arrow function */
const calcularDiferenca_2 = (valor1, valor2) => valor1 - valor2;

/* 2) Teste fazendo novas chamadas e novas saídas */
let result = calcularDiferenca_2(7, 5);
console.log(result);





