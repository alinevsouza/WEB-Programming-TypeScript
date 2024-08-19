"use strict";
/**

Calculadora de IMC (Índice de Massa Corporal)

Crie uma função em TypeScript que calcule o IMC de uma pessoa.

A função deve:
    - Receber dois parâmetros: peso (em kg) e altura (em metros)
    - Calcular o IMC usando a fórmula: IMC = peso / (altura * altura)
    - Retornar o IMC calculado com duas casas decimais

*/
Object.defineProperty(exports, "__esModule", { value: true });
/** Calculadora com altura e peso definidos no código */
/**
function imcCalcular(alt: number, peso: number): number {
  return peso / (alt * alt);
}

const alt: number = 1.7;
const peso: number = 50;
console.log(`Seu IMC é de: ${imcCalcular(alt, peso)}`);
*/
/** Calculadora com altura e peso inseridos pelo usuário */
var promptSync = require("prompt-sync");
var prompt = promptSync();
function imcCalcular(alt, peso) {
    return peso / (alt * alt);
}
var peso = parseFloat(prompt("Digite seu peso (kg): "));
var alt = parseFloat(prompt("Digite sua altura (m): "));
var imc = imcCalcular(alt, peso);
console.log("Seu IMC \u00E9: ".concat(imc.toFixed(2)));
