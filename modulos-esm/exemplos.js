'use strict';

/* Módulos ESM: EcmaScript Modules (sistema atual, moderno) */
function saudacao(nome){
    console.log("Olá "+nome+"!");
}

const clientes = ["Maycon", "Gabriel", "Júlia"];

function separador(){
    console.log("\n********************************\n");
}

export { saudacao, clientes, separador }