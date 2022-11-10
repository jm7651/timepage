gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles(".mobile, .desktop");
ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {
    gsap.fromTo(
      ".pain_point001",
      { x: "-50%", rotate: "0" },
      {
        x: 0,
        rotate: "360deg",
        scrollTrigger: {
          trigger: ".contents",
          start: "-100 50%",
          end: "0 70%",
          scrub: 1,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      ".pain_point002",
      { y: "20rem" },
      {
        y: 0,
        scrollTrigger: {
          trigger: ".contents",
          start: "-100 80%",
          end: "0 50%",
          scrub: 1,
          // markers: true,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      ".pain_point003",
      { x: "50%", rotate: "0" },
      {
        x: 0,
        rotate: "-360deg",
        scrollTrigger: {
          trigger: ".contents",
          start: "-100 80%",
          end: "0 70%",
          scrub: 1,
          // markers: true,
          start: "top 80%",
        },
      }
    );
  },
});
