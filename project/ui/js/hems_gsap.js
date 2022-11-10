gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  ".pain_point001",
  { x: "-50%", rotate: "0" },
  {
    x: 0,
    rotate: "360deg",
    scrollTrigger: {
      trigger: ".contents",
      start: "100 80%",
      end: "+=300 50%",
      scrub: 1,
      markers: true,
      start: "top center",
    },
  }
);
gsap.fromTo(
  ".pain_point002",
  { x: "50%", rotate: "0" },
  {
    x: 0,
    rotate: "-360deg",
    scrollTrigger: {
      trigger: ".contents",
      start: "100 80%",
      end: "+=300 50%",
      scrub: 1,
      // markers: true,
      start: "top center",
    },
  }
);
