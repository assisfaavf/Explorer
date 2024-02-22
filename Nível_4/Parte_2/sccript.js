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

// Solução:

// let randomNumber = Math.round(Math.random() * 10);
// let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10");

// let tryes = 1;

// while (result != randomNumber) {
//   result = prompt("Erro, tente novamente:");
//   tryes++;
// }

// alert(`Parabéns! Você advinhou o número em ${tryes} tentativas`);

//__________________________________________________________

/*
7) Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o 
  seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/

// Solução:

// let option = 0;

// let items = [];

// while (option != 3) {
//   option = Number(prompt(`Olá usuário! Digite o número da opção desejada
//   1. Cadastrar um item na lista
//   2. Mostrar itens cadastrados
//   3. Sair do programa`));

//   if (option == 1) {
//     let item = prompt("Digite o item que deseja cadastrar");
//     items.push(item);
//   } else if (option == 2) {
//     if (items.length == 0) {
//       alert("Não existem itens cadastrados!");
//     } else {
//       alert(items.join(", "));
//     }
//   } else if (option == 3) {
//     alert("O programa foi encerrado");
//   } else {
//     alert("Opção inválida");
//   }
// }

// Melhorando a solução:

// let option = 0;

// let items = [];

// while (option != 3) {
//   option = Number(prompt(`Olá usuário! Digite o número da opção desejada
//   1. Cadastrar um item na lista
//   2. Mostrar itens cadastrados
//   3. Sair do programa`));


//   switch (option) {
//   case 1:
//     let item = prompt("Digite o item que deseja cadastrar");
//     items.push(item);
//     break;
//   case 2:
//     if (items.length == 0) {
//       alert("Não existem itens cadastrados!");
//     } else {
//       alert(items.join(", "));
//     }
//     break;
//     case 3:
//       alert("O programa foi encerrado");
//       break;
//     default:
//       alert("Opção inválida");
//       break;
//   }
//   }

//__________________________________________________________

/*
8) /* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

// Solução:

// const patients = [{

//   name: "João",
//   age: 25,
//   weight: 80,
//   height: 1.80,
// }, {
//   name: "Maria",
//   age: 30,
//   weight: 60,
//   height: 1.70,
// }, {
//   name: "José",
//   age: 35,
//   weight: 90,
//   height: 1.75,
// },
// {
//   name: "Ana",
//   age: 40,
//   weight: 70,
//   height: 1.65,
// }];

// let patientsName = [];

// for (let i = 0; i < patients.length; i++) {
//   patientsName.push(patients[i].name);
// } 
// alert(patientsName.join(", ") );

/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

// Solução:

// Função para calculo de imc
// function IMC (weight, height) {
//   return weight / (height)**2;
// }

// // Função para imprimir imc
// function printPatientIMC (patient) {

//   return `Paciente ${patient.name} possui o IMC de: ${IMC(patient.weight, patient.height).toFixed(2)}`;

// }

// // Estrutura de repetição que chama a função de imprimir imc de cada paciente
// // cria a variável patient que deriva diretamente de patients, sendo usado como contador dentro do vetor patients
// for (let patient of patients){
//   let imcMesaage = printPatientIMC(patient);
//   alert(imcMesaage);
// }

