const modal = document.querySelector(".summary_modal");
const btnModal = document.querySelector(".summary_button");
const modalClose = window.parent.document.querySelector(".modal_close");
btnModal.addEventListener("click", (e) => {
  modal.style.display = "flex";
  document.body.classList.add("stop-scroll");
  modalClose.style.display = "none";
});
