function iframeLoading() {
  function bodyFreezeScroll() {
    const body = document.body;
    const bodyWidth = document.body.clientWidth;
    body.style.overflow = "hidden";
    body.style.marginRight =
      (body.style.marginRight ? "+=" : "") + (body.clientWidth - bodyWidth);
  }
  function bodyUnfreezeScroll() {
    const body = document.body;
    const bodyWidth = document.body.clientWidth;
    body.style.marginRight =
      (body.style.marginRight ? "-=" : "") + (bodyWidth - body.clientWidth);
    body.style.overflow = "auto";
  }
  const modalWrap = document.querySelector(".modal");
  const project = document.querySelectorAll(".project");
  const modalClose = document.querySelector(".modal_close");
  modal.style.display = "none";
  document.querySelectorAll(".project").forEach((element) =>
    element.addEventListener("click", () => {
      bodyFreezeScroll();
      project.forEach((item) => item.classList.remove("active"));
      modalWrap.classList.add("open");
    })
  );
  modalClose.addEventListener("click", () => {
    bodyUnfreezeScroll();
    modalWrap.classList.remove("open");
  });
}
iframeLoading();
