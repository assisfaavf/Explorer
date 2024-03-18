import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
  sounds.buttonPressAudio.play();
}

export function set() {
  // Premite que ao clicar no botão set os minutos sejam alterados
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
  console.log("music");
}
