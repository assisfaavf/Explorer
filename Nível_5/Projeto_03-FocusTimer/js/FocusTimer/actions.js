import state from "./state.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  console.log("running");
}

export function set() {
  console.log(" set function");
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
  console.log("music");
}
