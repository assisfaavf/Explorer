// Importação simples
// import "./utils.js";
// Imnporta todo o arquivo e excuta automaticamente

// Deafault import e export
// import qualquerNome from "./utils.js";
// Recebe oque foi importado independente do nome que você chamar
// console.log(qualquerNome);

// Named import
// import { text, message } from "./utils.js";
// nesse caso os nomes das variáveis importam, sendo necessário importa-las com o mesmo nome que foram exportadas
// console.log(text, message);

// Importando diversos com named import
// import { double, today } from "./utils.js";
// console.log(today);
// console.log(double(2));

// Misto (named e default)
// import funcaoPadrao, { date, greeting } from "./utils.js";
// console.log(greeting("assis"));
// console.log(date);
// console.log(funcaoPadrao("assis"));

// Importando e mudando o nome dos dados
// Import as
// import { sum as soma, subtract as subtracao } from "./utils.js";
// Muda o nome da funçaõ sum por soma usando o as
// Sendo possível realizar isso multiplas vezes
// console.log(soma(2, 4));
// console.log(subtracao(20, 1));

// Importando todos os dados exportados e dando um nome padrão para todos
// Import * as
// import * as calculator from "./utils.js";
// passanod como um objeto, e para acessar os dados é utilizado cmo se fosse um método
// console.log(calculator.divide(50, 2));
