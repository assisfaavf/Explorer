let condição = true
let expressão = 'valor'
let valor1 = 'valor1'
let valor2 = 'valor2'

// If e Else
if (condição) {
  // executa se true
} else {
  // executa se false
}

// Else if
if (condição) {
  // executa se true
} else if (condição) {
  // executa se true
} else {  
  // executa se ambas forem false
}

// Switch
switch (expressão) {
  case valor1:
    // executa se valor1
    break;
  case valor2:
    // executa se valor2
    break;
  default:
    // executa se nenhum dos valores
    break;
}

// throw try catch
function sayMyName(name) {
  if (name === '') {
    throw 'Nome é obrigatório'
  }
  console.log(name)
}

try {
  sayMyName('')
} catch(e) {
  console.log(e)
}