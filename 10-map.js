"use strict";

import { separador } from "./modulos-esm/exemplos.js";
import cursos from "./modulos-esm/cursos.js";

/* map (mapear, mapeamento - transformar/gerar em outra coisa) 
Passa por elementos de um array e realiza operações em cada um deles
através de uma função callback, gerando um novo array de elementos 
transformados. */

// Exemplo 1
const numeros = [10, 20, 5, 12.5, 66, 50, 1000];
console.log(numeros);

const numerosDobrados = numeros.map((numero) => numero * 2);
console.log(numerosDobrados);

separador();

/* Mini-exercício:
1) Crie um array com 5 textos escritos em letras MAIÚSCULAS
2) Mostre no console este array
3) Usando o map, acesse e transforme todos eles em letras minúsculas (toLowerCase)
4) Guarde o resultado do map em uma nova constante 
5) Mostre no console este novo array */

const textos = ["A", "B", "C", "D", "E"];
console.log(textos);
const novoTextos = textos.map((texto) => texto.toLowerCase());
console.log(novoTextos);

separador();

// console.log("== Lista Completa de Cursos ==");
// console.log(cursos);
// console.log("================================");

separador();

// Exemplo 2: gerar um novo array contendo somente os títulos dos cursos
const titulos = cursos.map((curso) => curso.titulo);
console.log(titulos);

separador();

/* Exercício
Use o map para gerar um novo array contendo SOMENTE os preços dos cursos
calculados com um desconto de 10%. Mostre no console este novo array. */
const precos = cursos.map((curso) => {
  let resultado = curso.preco - curso.preco * 0.1;
  return resultado;
});

console.log(precos);

separador();

// Exemplo 3: gerar um novo array COMPLETO (ou seja, com os objetos completos) mas com os preços atualizados com o desconto
const cursosComDesconto = cursos.map((curso) => {
  return {
    ...curso, // spread das propriedades do curso (copiando-as pra cá)
    preco: curso.preco - curso.preco * 0.1, // mas o preco é atualizado
  };
});

console.log(cursosComDesconto);

separador();

/* Exercício
Gere uma nova de lista de cursos contendo apenas os titulos e as categorias. */

// Versão 1
// const cursosComTituloCategoria = cursos.map((curso) => {
//   return {
//     titulo: curso.titulo,
//     categoria: curso.categoria,
//   };
// });

// Versão 2: com retorno implícito (atenção: use parênteses no retorno do objeto)
// const cursosComTituloCategoria = cursos.map((curso) => ({
//   titulo: curso.titulo,
//   categoria: curso.categoria,
// }));

// Versão 3: usando desestruturação de parâmetros
/* Note que podemos até mesmo deixar apenas o nome dos parâmetros como
propriedades do objeto retornado. Ou seja, em vez de usar titulo: titulo, podemos deixar somente titulo. Em vez de usar categoria: categoria, basta categoria. */
const cursosComTituloCategoria = cursos.map(({ titulo, categoria }) => ({
  titulo,
  categoria,
}));

console.log(cursosComTituloCategoria);
