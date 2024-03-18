import state from "./state.js";
import * as el from "./elements.js";

export function updatDisplay(minutes, seconds) {
  // Usando o nullish operator
  minutes = minutes ?? state.minutes;
  // Se o valor passado for "null" ele substitui pelo valor de minutes no state
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
