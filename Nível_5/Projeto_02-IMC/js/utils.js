// Função para verificar se o peso e altura digitados são números
export function notANumber(value) {
  return isNaN(value) || value == "";
}

// Função para calcular o IMC
export function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
