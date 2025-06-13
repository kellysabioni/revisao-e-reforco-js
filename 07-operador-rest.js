'use strict';

import { classificar } from './modulos-esm/funcoes.js';

/* Sobre o operador rest  ...
Usamos o rest para mesclar uma relação de parâmetros/argumentos 
para uma função. Na prática, os parâmetros se comportam como um array podendo receber iterações via loop. */
function somar(...valores){
    // Variável acumuladora
    let total = 0;

    // Iteração para somar e guardar o total
    for(const valor of valores){
        total += valor;
    }

    return total;
}

let resultado1 = somar(10, 20);
let resultado2 = somar(10, 20, 50);
console.log(resultado1);
console.log(resultado2);


console.log("----------------");

console.log( classificar("Goiaba", "Amora", "Banana", "Abacate") );
console.log( 
    classificar(
        "Yes", "Rush", "Pink Floyd", "Slayer", "Iron Maiden", "Metallica"
    ) 
);

