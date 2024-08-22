"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function soma(num, num1) {
    return num + num1;
}
function sub(num, num1) {
    return num - num1;
}
function div(num, num1) {
    return num / num1;
}
function multi(num, num1) {
    return num * num1;
}
console.log("Escolha uma das operações: \n(1) Soma\n(2) Subtração\n(3) Divisão\n(4) Multiplicação\n");
var operacao = parseFloat(prompt("Digite o código da operação desejada:"));
console.log("\n");
var num = parseFloat(prompt("Digite o primeiro número da sua operação: "));
console.log("\n");
var num1 = parseFloat(prompt("Digite o segundo número da sua operação: "));
if (operacao == 1) {
    var result = soma(num, num1);
    console.log("O resultado da sua soma \u00E9: ".concat(result));
}
else if (operacao == 2) {
    var result1 = sub(num, num1);
    console.log("O resultado da sua subtra\u00E7\u00E3o \u00E9: ".concat(result1));
}
else if (operacao == 3) {
    var result2 = div(num, num1);
    console.log("O resultado da sua divis\u00E3o \u00E9: ".concat(result2));
}
else if (operacao == 4) {
    var result3 = multi(num, num1);
    console.log("O resultado da sua multiplica\u00E7\u00E3o \u00E9: ".concat(result3));
}
else {
    console.log("ERRO: Operação inválida!!");
}
