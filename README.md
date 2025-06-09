# Atividades de revisão e reforço de JavaScript

## Sobre escopo de variáveis e constantes

- `var`: escopo **GLOBAL**
- `let`: escopo **BLOCO**, podendo ser GLOBAL dependendo de onde declarada
- `const`: escopo **BLOCO**, podendo ser GLOBAL dependendo de onde declarada. Obs.: **obrigatório** iniciliazar com algum valor.

---

## Módulos no JavaScript

Existem duas formas de uso:

- Módulos CJS: mecanismo mais antigo, usa `module.exports` e `require` assosiado à uma constante.
- Módulos ESM: mecanismo atual, usa `export` e `import`.

**Obs.:** recomendável criar na raiz `package.json` contendo: 
```json
{
    "type": "module"
}
```
---