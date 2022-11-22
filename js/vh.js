const setVh = () => {
  document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
};
window.addEventListener("resize", setVh);
setVh();
