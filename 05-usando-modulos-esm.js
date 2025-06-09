'use strict';

// Importação de múltiplos recursos/módulos usando ESM
import alunos from './modulos-esm/alunos.js'

import { saudacao, clientes, separador } from './modulos-esm/exemplos.js';

saudacao("Fulano de tal");
console.log(clientes);

console.log(alunos[1]);

console.log(alunos);

for (const aluno of alunos) {
    console.log(aluno);
}
