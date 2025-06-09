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

separador();

/*
 Exercícios
1) Crie um arquivo chamado "funções.js" dentro da pasta "modulos-esm"
2) Dentro dele, programe 3 funções (USANDO ARROW FUNCTION):
    - Converter caracteres para MAIÚSCULO
    - Converter caracteres para MINÚSCULO
    - Formatar valor em moeda brasileira (real)
3) Exporte-as como módulos
4) No arquivo 05, importe e utilize etas funções passando textos e valores para testes.
*/