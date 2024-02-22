/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [{
  name: "Assis",
  firstGrade: 5,
  secondGrade: 9
},
{
  name: "Jaylla",
  firstGrade: 10,
  secondGrade: 10
},
{
  name: "João",
  firstGrade: 7,
  secondGrade: 8
},
{
  name: "Maria",
  firstGrade: 6,
  secondGrade: 5
},
{
  name: "José",
  firstGrade: 10,
  secondGrade: 10
}]

function average (students){
  return (firstGrade + secondGrade)/2;
}

for (let i ; i <= students.length ; i++){

  if
}