// DEsafio Stage 4 - Part 2
/*
esse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let numberOne = prompt("Digite o primeiro número");
let numberTwo = prompt("Digite op segundo número");

let sum = Number(numberOne) + Number(numberTwo);
let subtraction = Number(numberOne) - Number(numberTwo);
let multiplication = Number(numberOne) * Number(numberTwo);
let division = Number(numberOne) / Number(numberTwo);
let rest = Number(numberOne) % Number(numberTwo)

alert (`A soma dos dois números é ${sum}`)
alert (`A subtração dos dois números é ${subtraction}`)
alert (`A multiplicação dos dois números é ${multiplication}`)
alert (`A divisão dos dois números é ${division}`)
alert (`O resto da divisão dos dois números é ${rest}`)

if((sum % 2) != 0){
  alert("A soma dos números é impar!")
} else {
  alert ("A soma dos números é par!")
}

if(Number(numberOne) === Number(numberTwo)){
  alert ("Os números são iguais!")
}else {
  alert ("Os números são diferentes!")
}