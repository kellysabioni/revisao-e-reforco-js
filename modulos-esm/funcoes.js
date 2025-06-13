'use strict';

export const converterMaiuscula = texto => texto.toUpperCase();

export const converterMinuscula = texto => texto.toLowerCase();

export const formatarMoeda = (valor, moeda = 'BRL', localidade = 'pt-BR' ) => {
    return valor.toLocaleString(
        localidade,
        {
            style: "currency",
            currency: moeda
        }
    )
};

/* Usamos o rest operator para obter uma lista de parâmetros, não 
importando a quantidade */
export function classificar(...texto){
    return texto.sort();
}

// export { converterMaiuscula, converterMinuscula, formatarMoeda }