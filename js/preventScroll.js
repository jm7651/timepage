function iframeLoading2() {
  const body = window.document.body;

  function bodyFreezeScroll() {
    const bodyWidth = body.innerWidth();
    body.style.overflow = "hidden";
    body.style.marginRight =
      (body.style.marginRight ? "+=" : "") + (body.innerWidth() - bodyWidth);
  }
  function bodyUnfreezeScroll() {
    const bodyWidth = body.innerWidth();
    body.style.marginRight =
      (body.style.marginRight ? "-=" : "") + (bodyWidth - body.innerWidth());
    body.style.overflow = "auto";
  }
}
iframeLoading2();
