'use strict';
import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";
import { formatarMoeda } from "./modulos-esm/funcoes.js";

/* reduce (reduzir, redução, chegar a um resultado único)
Passa por elementos de um array e reduz a um único valor, que pode ser uma soma, média, concatenação, etc.
A função callback recebe dois parâmetros: o acumulador (valor que é acumulado até o momento), e o valor atual (elemento do array sendo processado) */

// Exemplo 1
const valores = [10, 5, 50 , 200, 1000];
const total = valores.reduce((acumulador, valor) => acumulador + valor, 0 );
console.log(total);

separador();

// Exercício 1: realize a soma dos preços de todos os cursos
const totalCursos = cursos.reduce((acumulador, curso) => acumulador + curso.preco, 0);
console.log(`A soma total dos cursos ${formatarMoeda(totalCursos)}`);

separador();

// Exercício 2: calcule a média dos preços de todos os cursos 
const mediaCursos = cursos.reduce((acumulador, curso) => acumulador + curso.preco, 0) / cursos.length
console.log(` O preço médio dos cursos é de  ${formatarMoeda(mediaCursos)}.`);

separador();

// Exercício 3: calcule o preço total dos cursos de Front-End 
const precoTotalFrontEnd = cursos
.filter(({ categoria }) => categoria === "Front-End")
.reduce((acumulador, curso) => acumulador + curso.preco, 0);

console.log(`A soma total dos cursos de Front-End é de  ${formatarMoeda(precoTotalFrontEnd)}`);

separador();

