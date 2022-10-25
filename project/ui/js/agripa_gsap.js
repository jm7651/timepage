const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".agripa_002_desc",
    start: "100 80%",
    end: "+=300 50%%",
    scrub: true,
    markers: true,
  },
});
tl.to(".box03", { height: "40%", duration: 1 });
tl.to(".box02", { height: "70%", duration: 1 });
tl.to(".box01", { height: "50%", duration: 1 });
