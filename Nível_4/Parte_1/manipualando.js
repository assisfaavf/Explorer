//Estudo de variaveis em JavaScript
//Let
//Const
//Var
// Variaveis const são na verdade constantes, não podendo ser alteradas

function person(nome, idade, cidade, usuario, senha) {
  this.name = nome;
  this.age = idade;
  this.city = cidade;
  this.login = usuario;
  this.password = senha;
}

const assis = new person("assis", 23, "sobral", "assis faca", "assis123");
const jaylla = new person("jaylla", 22, "tiangua", "jmsc2064", "jaylla123");
console.log(assis);
console.log(jaylla);

if ((jaylla.password === "jaylla123") & (jaylla.login === "jmsc2064")) {
  console.log("ok");
} else console.log("erro");

const teste = "hoje é quinta-feira, dia 8 de fevereiro de 2024, Bom dia!";
console.log(teste.includes("sexta"));

const teste2 = teste.split(" ");
console.log(teste2);

const teste3 = teste2.join("-");
console.log(teste3);

// criar array com constructor
// Jeito normal de se criar
// let myArray = ["a", "b", "c"];
// Utilizando o constructor
let myArray = new Array("a", "b", "c");
console.log(myArray.length);
// sefor usado apenas um número x serão geradas x posições vazias nesse array
let myArray2 = new Array(10);

console.log(myArray, myArray2);

let word = "manipulação!";
console.log(Array.from(word));

let techs = ["HTML", "CSS", "JS"];
console.log(techs);

// Adicionar elemento no fim do array
techs.push("nodeJs");
console.log(techs);
// Adicionar elemento no inicio do array
techs.unshift("sql");
console.log(techs);
// Remover elemento do final do array
techs.pop();
console.log(techs);
//Remover elemento do inicio do array
techs.shift();
console.log(techs);
// Selecionar apenas alguns elementos do vetor
console.log(techs.slice(1, 3));
// Remover 1 ou mais itens em qualquer posição do vetor
techs.splice(1, 1);
console.log(techs);
// encontrar posição de um elemento no vetor
let index = techs.indexOf("CSS");
console.log(index);
