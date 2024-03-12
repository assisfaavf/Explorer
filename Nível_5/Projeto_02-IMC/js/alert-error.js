export const AlertError = {
  element: document.querySelector(".screen-error"),
  open() {
    AlertError.element.classList.add("open");
  },
  close() {
    AlertError.element.classList.remove("open");
  },
};
