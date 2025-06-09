const converterMaiuscula = nome => (nome.toUpperCase()) ;
const converterMinuscula = nome => (nome.toLowerCase()) ;
const formatarReal = valor => (valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));


export { converterMaiuscula , converterMinuscula , formatarReal }