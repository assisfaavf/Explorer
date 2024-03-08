const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const title = document.querySelector(".title");
const modal = document.querySelector(".modal-wrapper");
const button = document.querySelector(".button");
const close = document.querySelector(".close");

function imcCalc(event) {
  event.preventDefault();

  let imc = Number(weight.value) / Number(height.value) ** 2;

  modal.classList.toggle("open");

  title.innerText = `O seu IMC é ${imc.toFixed(1)}`;

  weight.value = "";
  height.value = "";
}

function closeModal(event) {
  event.preventDefault();

  modal.classList.toggle("open");
}

button.addEventListener("click", imcCalc);
close.addEventListener("click", closeModal);
