import promptSync = require("prompt-sync");
const prompt = promptSync();

function soma(num: number, num1: number): number {
  return num + num1;
}

function sub(num: number, num1: number): number {
  return num - num1;
}

function div(num: number, num1: number): number {
  return num / num1;
}

function multi(num: number, num1: number): number {
  return num * num1;
}

console.log(
  "Escolha uma das operações: \n(1) Soma\n(2) Subtração\n(3) Divisão\n(4) Multiplicação\n"
);

const operacao: number = parseFloat(
  prompt("Digite o código da operação desejada:")
);

console.log("\n");

const num: number = parseFloat(
  prompt("Digite o primeiro número da sua operação: ")
);

console.log("\n");

const num1: number = parseFloat(
  prompt("Digite o segundo número da sua operação: ")
);

if (operacao == 1) {
  const result = soma(num, num1);
  console.log(`O resultado da sua soma é: ${result}`);
} else if (operacao == 2) {
  const result1 = sub(num, num1);
  console.log(`O resultado da sua subtração é: ${result1}`);
} else if (operacao == 3) {
  const result2 = div(num, num1);
  console.log(`O resultado da sua divisão é: ${result2}`);
} else if (operacao == 4) {
  const result3 = multi(num, num1);
  console.log(`O resultado da sua multiplicação é: ${result3}`);
} else {
  console.log("ERRO: Operação inválida!!");
}
