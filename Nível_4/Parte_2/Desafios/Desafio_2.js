/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no 
concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: "Assis",
    firstGrade: 5,
    secondGrade: 9,
  },
  {
    name: "Jaylla",
    firstGrade: 10,
    secondGrade: 10,
  },
  {
    name: "João",
    firstGrade: 7,
    secondGrade: 8,
  },
  {
    name: "Maria",
    firstGrade: 6,
    secondGrade: 5,
  },
  {
    name: "José",
    firstGrade: 10,
    secondGrade: 10,
  },
];

function average(firstGrade, secondGrade) {
  return (firstGrade + secondGrade) / 2;
}

function printAverage(student) {
  if (average(student.firstGrade, student.secondGrade) >= 7) {
    return `Parabens ${student.name}! você foi aprovado`;
  } else {
    return `Boa sorte na proxima ${student.name}!`;
  }
}
for (let student of students) {
  let averageMessage = printAverage(student);
  alert(averageMessage);
}
