// Estruturas de repetição
// For
// for (incio; condição; incremento) {
//  executa enquanto a condição for verdadeira
// }
// Exemplo:
for (let i = 0; i < 10; i++) {
  console.log(i)
}
for ( let j = 100; j>10 ; j--){

  console.log(j)
}

for ( let k = 100; k>10 ; k--){
  if(k == 50){
    break;
  }
  console.log(k)
}

for ( let l = 100; l>10 ; l--){
  if(l == 50){
    continue;
  }
  console.log(l)
}

// While
// while (condição) {
//   // executa enquanto a condição for verdadeira
// }
// Exemplo: 
let m = 123123123123123123
while (m > 10) {
  console.log(m)
  m /= 100
}

// for...of
// for (variável of lista de variaveis) {
  // }

  let name = 'assis'
  let names = ['assis', 'jaylla', 'joão']
  
  for (let char of name) {
    console.log(char)
      //irá imprimir uma letra do nome assis de cada vez até acabar o nome
  } 
  
  for (let name of names) {
    console.log(name)
      //Irá imprimir um nome do vetor nomes até o último
  }

  // for...in
  // for (variável in objeto) {
    // }
    let person = {
      name: 'assis',
      age: 19,
      weight: 60
    }
    
    for (let property in person) {
      console.log(property)
      console.log(person[property])
    }
    //irá imprimir o nome da propriedade e o valor da propriedade do objeto person
