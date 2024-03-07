let weight = document.querySelector(".weight");
let height = document.querySelector(".height");
function imcCalc(event) {
  event.preventDefault();
  let imc = weight.value / height.value ** 2;

  window.alert(imc);
}

const button = document.querySelector(".button");

button.addEventListener("click", imcCalc);
