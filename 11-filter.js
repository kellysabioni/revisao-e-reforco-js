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

separador();

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
  { codigo: 1, tipo: "Limpeza", status: "Concluído" },
  { codigo: 2, tipo: "Manutenção", status: "Pendente" },
  { codigo: 3, tipo: "Reparo", status: "Pendente" },
  { codigo: 4, tipo: "Consultoria", status: "Concluído" },
  { codigo: 5, tipo: "Instalação", status: "Concluído" },
];

/* Faça o exercício */
// Forma Simplificada
// const servicosPendentes = servicos.filter((servico) => servico.status === "Pendente");

// Forma desestruturada
const servicosPendentes = servicos.filter(
  ({ status }) => status === "Pendente"
);

console.log(servicosPendentes);

separador();

const cursosDesign = cursos.filter((curso) => curso.categoria === "Design");

console.log(cursosDesign);

separador();

// Exemplo 4

const cursosExcetoDesign = cursos.filter(
  (curso) => curso.categoria !== "Design"
);

console.log(cursosExcetoDesign);

separador();

/* Exercício
Gere um array com os cursos que atendam os seguintes critérios:
- Categoria Front-End OU Mobile
- Preços acima de 600 */
("Exercicio");

const cursosFrontMobile = cursos.filter(
  (curso) =>
    (curso.categoria === "Front-End" || curso.categoria === "Mobile") &&
    curso.preco > 600
);
console.log("Quantidade de cursos: " + cursosFrontMobile.length);
console.log(cursosFrontMobile);

separador();

/* Desafio
Gerar um novo array com os cursos da categorai Back-End e COM O PREÇO atualizado com 10% de desconto. Para essa atividade você deverá combinar filter com map. */
/* const cursosBackEnd = cursos.filter((curso) => curso.categoria === "Back-End").map((curso) => {
  return {  ...curso, // spread das propriedades do curso (copiando-as pra cá)
            preco: curso.preco - curso.preco * 0.1, // mas o preco é atualizado
  };
});
 */
const cursosBackEnd = cursos
  .filter(({ categoria }) => categoria === "Back-End")
  .map((curso) => ({ ...curso, preco: curso.preco - curso.preco * 0.1 }));

console.log("*** DESAFIO *** - Qtde de cursos: " + cursosBackEnd.length);
console.log(cursosBackEnd);
