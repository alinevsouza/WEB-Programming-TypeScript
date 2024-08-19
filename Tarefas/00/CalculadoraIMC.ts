/**

Calculadora de IMC (Índice de Massa Corporal)

Crie uma função em TypeScript que calcule o IMC de uma pessoa. 

A função deve:
    - Receber dois parâmetros: peso (em kg) e altura (em metros)
    - Calcular o IMC usando a fórmula: IMC = peso / (altura * altura)
    - Retornar o IMC calculado com duas casas decimais

*/

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

import promptSync = require("prompt-sync");
const prompt = promptSync();

function imcCalcular(alt: number, peso: number): number {
  return peso / (alt * alt);
}

const peso = parseFloat(prompt("Digite seu peso (kg): "));
const alt = parseFloat(prompt("Digite sua altura (m): "));

const imc = imcCalcular(alt, peso);
console.log(`Seu IMC é: ${imc.toFixed(2)}`);
