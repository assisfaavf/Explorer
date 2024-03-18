import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";

// Lógica do timer
export function countDown() {

  clearTimeout(state.countDownId)

  if (!state.isRunning) {
    return;
    // Só aceita o start, se o pause for pressionado mudando o estado a aplicação irá parar
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    reset();
    kitchenTimer.play()
    return;
  }

  updateDisplay(minutes, seconds);

  state.countDownId = setTimeout(() => countDown(), 1000);
  // setTimeout executa uma função callback após um tempo, em milisegundos, determinado no segundo argumento

  // Recurssão -> quando uma função é chamada dentro dela mesma e entra em loop, é sempre necessário pensar em um modo de para o loop para evitar erros
}

export function updateDisplay(minutes, seconds) {
  // Usando o nullish operator
  minutes = minutes ?? state.minutes;
  // Se o valor passado for "null" ele substitui pelo valor de minutes no state
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
