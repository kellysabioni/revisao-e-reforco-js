"use strict";

import { classificar } from "./modulos-esm/funcoes.js";
import { separador } from "./modulos-esm/exemplos.js";

/* Sobre o operador spread ...
Usamos o spread para "espalhar" dados de arrays e objetos, 
o que pode ser útil na chamada de funções e também na
mesclagem destas estruturas. */

// Spread em arrays
const bandas = ["Yes", "Rush", "Pink Floyd"];
const maisBandas = ["Dream Theater", "Savatage", ...bandas];

console.log(bandas);
console.log(maisBandas);

separador();

// Spread para "espalhar" parâmetros para uma função
console.log(classificar(...maisBandas));

separador();

// Spread em objetos
const cliente = {
  nome: "Ozzy",
  cidade: "Belo Horizonte",
  idade: 77,
};

const compra = {
  ...cliente, // copiando as propriedades de cliente para compra
  codigoPedido: "123xyz",
  produtos: ["Morcego", "Pomba", "Microfone"],
  total: 2589.66,
  nome: "Paulo Cantor", // sobreescrevendo uma propriedade que veio com spread
};

console.log(compra);

console.log(
  `O cliente ${compra.nome} fez uma compra no valor de ${compra.total}`
);
