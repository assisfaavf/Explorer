// Exportação simples
// const message = "mensagem";
// window.alert(message);
// exporta todo o arquivo e excuta automaticamente quando for importado no arquivo de destino

// Default import e export
// export default message;

// Named export
// pode exportar mais de uma variável de uma vez
// const message = "mensagem";
// const text = "outra mensagem";

// export { message, text };
// OU
// export const message = "mensagem";
// export const text = "outra mensagem";

// Exportando diversos com named export
// const today = Date.now();

//exportando um valor já existente
// const double = (number) => number * 2;

//exportando diversos
// export { today, double };

// Misto (named e default)
// const date = new Date();
// const greeting = (name) => `hello ${name}`;

// export default function (argument) {
//   console.log(date, greeting(argument));
// }

// export { date, greeting };

// Exportando mudando o nome na importação
// export function sum(a, b) {
//   return a + b;
// }

// export function subtract(a, b) {
//   return a - b;
// }

// Exportando todos os dados e dando um nome padrão para todos na importação
// const sum = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// const subtract = (a, b) => a - b;
// const divide = (a, b) => a / b;

// export { sum, multiply, subtract, divide };
