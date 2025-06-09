'use strict';

function minhaFuncao(){
    console.log("Olá! Função criada em um módulo");
}

const clientes = ['Jon Oliva', 'David Gilmour', 'Floor Jansen'];

/* CJS: CommonJS */
module.exports = { minhaFuncao, clientes };