window.addEventListener("scroll", () => {
  let scrollLocation = document.documentElement.scrollTop;
  let windowHeight = window.innerHeight; //스크린창
  let fullHeight = document.body.scrollHeight;
  let section02 = document.querySelector(".runway_section002");
  let section02Height = section02.getBoundingClientRect().height;
  if (window.scrollY > section02Height / 3) {
  }
  if (scrollLocation + windowHeight >= fullHeight) {
    console.log("끝");
  }
});
