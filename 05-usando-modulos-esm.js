'use strict';

// Importação de múltiplos recursos/módulos usando ESM
import alunos from './modulos-esm/alunos.js'

import { saudacao, clientes, separador } from './modulos-esm/exemplos.js';

// Uso de um 'alias/apelido' para evitar conflito de nomes
import { pessoa, livro, alunos as personagens } from "./modulos-esm/dados.js";

saudacao("Fulano de tal");
console.log(clientes);

console.log(alunos[1]);

console.log(alunos);

for (const aluno of alunos) {
    console.log(aluno);
}

separador();

// Acessando recursos do módulo 'dados.js'
console.log(pessoa.nome);
console.log(livro);
console.log(personagens); // lembre-se: personagens é um apelido para alunos

