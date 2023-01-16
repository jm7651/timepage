const modal = document.querySelector(".summary_modal");
const btnModal = document.querySelector(".summary_button");
// const modalClose = window.parent.document.querySelector(".modal_close");
const summaryClose = document.querySelector(".summary_close");
btnModal.addEventListener("click", (e) => {
  console.log(modal);
  modal.style.display = "flex";
  document.body.classList.add("stop-scroll");
  // modalClose.style.display = "none";
});
summaryClose.addEventListener("click", (e) => {
  modal.style.display = "none";
  document.body.classList.remove("stop-scroll");
  // modalClose.style.display = "block";
});
modal.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("modal-overlay")) {
    modal.style.display = "none";
    document.body.classList.remove("stop-scroll");
    // modalClose.style.display = "block";
  }
});
