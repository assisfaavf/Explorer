export const modal = {
  // Declarando as variáveis relaciondas ao modal como "atributos: valores" do objeto
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal-card .title span"),
  buttonClose: document.querySelector(".modal-card button.close"),

  // usando o shorthand, que cria uma função anônima, para substituir a declaração de uma função
  open() {
    modal.wrapper.classList.add("open");
  },
  close() {
    modal.wrapper.classList.remove("open");
  },
};

modal.buttonClose.onclick = () => {
  modal.close();
};

// Adicionando o fechamento com a tecla esc
window.addEventListener("keydown", handleKeyDown);
// no caso da utilizaçaõ do window, é necessário utilizar o addEventListener pois se for utilizada a função onkeydown ele só reagirá ao ultimo caso chamado dessa função e por se tratar de um evento na tela occore bem amis de um
function handleKeyDown(event) {
  if (event.key === "Escape") {
    modal.close();
  }
}
