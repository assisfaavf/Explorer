/*
1) Encontre a solução para o seguinte problema:
Pergunte o nome do usuário e escreva a seguinte mensagem:
"Olá, [Nome do usuário]"
*/

// Solução:

// let usuário = prompt("Qual o seu nome ?");

// alert(`Olá, ${usuário}`);

//__________________________________________________________

/*
2) Solicite dois número e faça a soma deles e apresente o resultado final ao usuário
*/

// Solução:
// alert("Iremos fazer a soma de dois números informados por você");
// let num11 = prompt("Digite o primeiro número");
// let num21 = prompt("Digite o segundo número");
// alert("O resultado da soma dos dois número informados é: " + (Number(num11) + Number(num21)))

// __________________________________________________________

/*
3) Capurar dois número e realizar as seguintes operações:
-Soma
-Subtração
-Multiplicação
-Divisão
-Resto da divisão
E para cada operação, apresentar o resultado final ao usuário
*/

// Solução:
// alert("Iremos fazer a soma, subtração, multiplicação, divisão e resto da divisão de dois números informados por você");
//  let numberOne = prompt("Digite o primeiro número");
//  let numberTwo = prompt("Digite o segundo número");

//  let sum = Number(numberOne) + Number(numberTwo);
//  let sub = Number(numberOne) - Number(numberTwo);
//  let mult = Number(numberOne) * Number(numberTwo);
//  let div = Number(numberOne) / Number(numberTwo);
//  let rest = Number(numberOne) % Number(numberTwo);

//  alert(`O resultado da soma dos números informados é: ${sum}`);
//  alert(`O resultado da subtração dos números informados é: ${sub}`);
//  alert(`O resultado da multiplicação dos números informados é: ${mult}`);
//  alert(`O resultado da divisão dos números informados é: ${div}`);
//  alert(`O resultado do resto da divisão dos números informados é: ${rest}`);
// __________________________________________________________

/* 4) Solicitar o nome do aluno e as três notas do bimestre, calcular a média do aluno

Se o aluno passou, dar parabens

Se o aluno não passou, motivar a dar seu melhor na recuperação

Em ambos os casos mostre uma mensagem com o nome do aluno e a média

*/

// Solução

// let name = prompt("Qaul o seu nome?");
// let grade1 = prompt("Qaul foi sua primeira nota?");
// let grade2 = prompt("Qaul foi sua segunda nota?");
// let grade3 = prompt("Qaul foi sua terceira nota?");

// let average = (Number(grade1) + Number(grade2) + Number(grade3)) / 3;

// if (average >= 7) {
//   alert(`Parabens! ${name}, sua média do bimestre foi ${average.toFixed(2)}!`);
// } else {
//   alert(
//     `Não desista ${name}, sua média foi ${average.toFixed(
//       2
//     )}, ainda é possível recuperar essa nota`
//   );
// }

/* 5) Capture 10 itens para compor uma lista de compras

      Após capturar os 10 itens, imprima-os, separando por vírgula
*/

// Solução:

// let items = [];
// for (let i = 0; i < 10; i++) {
//   let j = i + 1;
//   items[i] = prompt(`Digite o ${j}° item`);
// }

// alert(items.join(", "));

/*
  6) ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

alert("Advinhe o número que estou pensando? Está entre 0 e 10");

let num = Math.round(Math.random() * 10);

for (let guess; guess != num; ) {
  guess = prompt("Erro, tente novamente:");
}

alert(`Parabéns! Você advinhou o número em  tentativas`);
