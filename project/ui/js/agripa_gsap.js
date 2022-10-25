gsap.registerPlugin(ScrollTrigger);
gsap.to(".box01", {
  scrollTrigger: {
    trigger: ".agripa_003",
    markers: true,
    start: "top center",
    end: "bottom bottom",
  },
  height: 1000,
  duration: 4,
});
