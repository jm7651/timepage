gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".agripa_002_desc",
    start: "100 80%",
    end: "+=300 50%%",
    scrub: 1,
    markers: true,
  },
});
tl.to(".box03", { height: "40%", duration: 1 });
tl.to(".box02", { height: "70%", duration: 1 });
tl.to(".box01", { height: "50%", duration: 1 });

gsap.to(".agripa_003_main", {
  scrollTrigger: {
    trigger: ".agripa_003",
    start: "100 80%",
    end: "+=300 50%",
    scrub: 1,
    markers: true,
    start: "top center",
  },
  x: "30%",
  duration: 2,
});

var startCount = { var: 0 };
var startCount1 = { var: 0 };
var startCount2 = { var: 0 };
gsap.to(startCount, {
  var: 28,
  duration: 2,
  ease: "none",
  onUpdate: changeNumber,
  scrollTrigger: {
    trigger: "#number0",
    toggleActions: "restart none reverse none",
  },
});
gsap.to(startCount1, {
  var: 45,
  duration: 2,
  ease: "none",
  onUpdate: changeNumber,
  scrollTrigger: {
    trigger: "#number1",
    toggleActions: "restart none reverse none",
  },
});
gsap.to(startCount2, {
  var: 37,
  duration: 2,
  ease: "none",
  onUpdate: changeNumber,
  scrollTrigger: {
    trigger: "#number2",
    toggleActions: "restart none reverse none",
  },
});
function changeNumber() {
  number0.innerHTML = startCount.var.toFixed();
  number1.innerHTML = startCount1.var.toFixed();
  number2.innerHTML = startCount2.var.toFixed();
}
