// Meu código
// const weight = document.querySelector("#weight");
// const height = document.querySelector("#height");
// const title = document.querySelector(".title span");
// const modal = document.querySelector(".modal-wrapper");
// const button = document.querySelector(".button");
// const close = document.querySelector(".close");

// function imcCalc(event) {
//   event.preventDefault();

//   let imc = Number(weight.value) / Number(height.value) ** 2;

//   modal.classList.toggle("open");

//   title.innerText = `O seu IMC é ${imc.toFixed(1)}`;

//   weight.value = "";
//   height.value = "";
// }

// function closeModal(event) {
//   event.preventDefault();

//   modal.classList.toggle("open");
// }

// button.addEventListener("click", imcCalc);
// close.addEventListener("click", closeModal);

// _____________________________________________________

// Código seguindo a Aula

// // Variáveis
// const form = document.querySelector("form");
// const inpuWeight = document.querySelector("#weight");
// const inputHeight = document.querySelector("#height");

// const modalWrapper = document.querySelector(".modal-wrapper");
// const modalMessage = document.querySelector(".modal-card .title span");
// const modalBtnClose = document.querySelector(".modal-card button.close");

// // onsubmit realiza uma ação quando um botão com o type="submit" é pressionado, no caso o de gerar o calculo do IMC
// form.onsubmit = function (event) {
//   event.preventDefault();

//   const weight = inpuWeight.value;
//   const height = inputHeight.value;

//   const result = IMC(weight, height);
//   const message = `Seu IMC é de ${result}`;

//   modalMessage.innerText = message;
//   modalWrapper.classList.add("open");
// };
// // O onclick funciona como se fosse uma forma mais simples de fazer um addEventListener com a ação "click"
// modalBtnClose.onclick = () => {
//   modalWrapper.classList.remove("open");
// };

// function IMC(weight, height) {
//   return (weight / (height / 100) ** 2).toFixed(2);
// }
// ________________________________________________________________
// Código Utilizanod um object literals para organizar as funções

// Variáveis
// const form = document.querySelector("form");
// const inpuWeight = document.querySelector("#weight");
// const inputHeight = document.querySelector("#height");

// const modal = {
//   // Declarando as variáveis relaciondas ao modal como "atributos: valores" do objeto
//   wrapper: document.querySelector(".modal-wrapper"),
//   message: document.querySelector(".modal-card .title span"),
//   buttonClose: document.querySelector(".modal-card button.close"),

// // usando o shorthand, que cria uma função anônima, para substituir a declaração de uma função
//   open() {
//     modal.wrapper.classList.add("open");
//   },
//   close() {
//     modal.wrapper.classList.remove("open");
//   },
// };

// form.onsubmit = function (event) {
//   event.preventDefault();

//   const weight = inpuWeight.value;
//   const height = inputHeight.value;

//   const result = IMC(weight, height);
//   const message = `Seu IMC é de ${result}`;

//   modal.message.innerText = message;
//   modal.open();
// };
// O onclick funciona como se fosse uma forma mais simples de fazer um addEventListener com a ação "click"
// modal.buttonClose.onclick = () => {
//   modal.close();
// };

// function IMC(weight, height) {
//   return (weight / (height / 100) ** 2).toFixed(2);
// }

// _______________________________________________________________
// Código utilizando modulos (import e export)

// Importando o modal
import { modal } from "./modal.js";

// Variáveis
const form = document.querySelector("form");
const inpuWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

// Clique para calcular o IMC
form.onsubmit = function (event) {
  event.preventDefault();

  const weight = inpuWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  modal.message.innerText = message;
  modal.open();
};

// Função para calcular o IMC
function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

window.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  if (event.key === "enter") {
    modal.open();
  }
}
