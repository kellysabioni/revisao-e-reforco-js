'use strict';

import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

/* reduce (reduzir, redução, chegar a um resultado único)
Passa por elementos de um array e reduz a um único valor, que pode ser uma soma, média, concatenação, etc.

A função callback recebe dois parâmetros: o acumulador (valor que é acumulado até o momento), e o valor atual (elemento do array sendo processado) */

// Exemplo 1

const valores = [10, 5, 50 , 200, 1000];
const total = valores.reduce((acumulador, valor) => {
    return acumulador + valor
}, 0 );

console.log(total);
