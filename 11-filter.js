"use strict";

import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

/* filter (filtrar)
Passa por elementos de um array e executa uma função callback visando
retornar valores de acordo com uma ou mais condições, gerando um novo array. */

// Exemplo 1: filtrar vendas que tenham batido uma meta
const vendas = [1500, 3000, 500, 1000, 750, 5000, 100];
const META = 1000;

const vendasQueBateramMeta = vendas.filter((venda) => venda >= META);

console.log(vendasQueBateramMeta);

/* Se fosse fazer sem filter... */
// const bateramMeta = [];
// for (const venda of vendas) {
//   if (venda >= META) {
//     bateramMeta.push(venda);
//   }
// }
// console.log(bateramMeta);

// Exemplo 2: filtrar serviços pendentes
const servicos = [
    {codigo: 1, tipo: "Limpeza" , status: "Concluído"},
    {codigo: 2, tipo: "Manutenção" , status: "Pendente"},
    {codigo: 3, tipo: "Reparo" , status: "Pendente"},
    {codigo: 4, tipo: "Consultoria" , status: "Concluído"},
    {codigo: 5, tipo: "Instalação" , status: "Concluído"},
]

/* Faça o exercício */
const servicosPendentes = servicos.filter((servico) => servico.status === "Pendente");

console.log(servicosPendentes);
