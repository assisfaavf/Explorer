// new
let name = new String("assis");
let age = new Number(23);

console.log(name, age);

/*Operadores unários
typeOf
delete
*/
//typeOf
const person = {
  name: "assis",
  age: 23,
};
console.log(person);
console.log(typeof person);
delete person.age;
console.log(person);

// Operadores Aritiméticos
// Multiplicação
console.log(3 * 4);
// Divisão
console.log(5 / 2);
// Adição
console.log(3 + 5);
// Subtração
console.log(2 - 1);

// Resto da divisão (%)

let remainder = 11 % 3;
console.log(remainder);
// incremento (++)
let increment = 0;
console.log(increment);
increment++;
console.log(increment);
// deecremento (--)
let decrement = 1;
console.log(decrement);
increment--;
console.log(decrement);
// Exponencial (**)
console.log(3 ** 2);

// Operadores de Comparação
// - irá comparar valores e retornar um boolean (true ou false)
// Igual a (==)
let one = 1;
let two = 2;

console.log(two == 1);
console.log(one == "1");

// Diferente de (!=)

console.log(one != two);
console.log(one != 1);
console.log(one != "1");

// Estritamente igual a (===)

console.log(one === "1");
console.log(one === 1);

// Estritamente diferente de (!==)

console.log(two !== "2");
console.log(two !== 2);

// Operadores de Atribuição (assignment)
let x;
console.log(x);

// Assignment (atribuição)
x = 1;

// adition assignment (adição a atribuição)
x += 2;

// subtraction assignment (subtração a atribuição)
x -= 1;

// multiplication assignment (multiplicação a adição)
x *= 2;

// Division assignment (divisão a adição)
x /= 2;

// Operador condicional Ternário
let pao = true;
let queijo = true;

// café da manhã top

const niceBreakfast = pao && queijo ? "café top" : "café paia";

console.log(niceBreakfast);

// Operadores para string (string operators)

// Comparação (comparison)
console.log("a" == "b");

// Concatenação
console.log("a" + "b");
