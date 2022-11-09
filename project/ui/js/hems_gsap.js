gsap.registerPlugin(ScrollTrigger);
gsap.to(".pain_point001", {
  scrollTrigger: {
    trigger: ".contents",
    start: "100 80%",
    end: "+=300 50%",
    scrub: 1,
    // markers: true,
    start: "top center",
  },
  x: "30%",
  duration: 2,
});
