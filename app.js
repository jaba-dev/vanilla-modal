const open = document.querySelector("#open");
const modalContainer = document.querySelector("#modal_container");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

close.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
