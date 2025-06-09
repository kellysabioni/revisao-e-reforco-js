'use strict';

// 'Importando' os módulos usando CJS require
const modulosExemplos = require('./modulos-cjs/exemplos.js');

// Chamando a função existente no módulo
modulosExemplos.minhaFuncao();

// Acessando o array através do módulo
console.log(modulosExemplos.clientes);