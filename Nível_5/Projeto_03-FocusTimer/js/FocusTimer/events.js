import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  });
}

// Deixa o espaço vazio quando for alterar o valor dos minutos
export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });
  // Usa a expressão regular \d para permitir digitar apenas números nos minutos
  el.minutes.onkeypress = (event) => /\d/.test(event.key);
  // Se o valor colocado para os minutos for maior que 60 ele coloca em 60 se não ele deixa o valor colocado
  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;
    time = time > 60 ? 60 : time;
    state.minutes = time;
    state.seconds = 0;

    updateDisplay();
    el.minutes.removeAttribute("contenteditable");
  });
}
