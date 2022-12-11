gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles(".mobile, .desktop");
ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {
    gsap.fromTo(
      ".runway_002",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".runway_002",
          start: "500 80%",
          end: "500 10%",
          scrub: 1,
          markers: true,
        },
      }
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".runway_002",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "+=4000",
        toggleActions: "play pause play reset",
      },
    });
    tl.from(".runway_logo", {
      opacity: 0,
      duration: 1,
    });
  },
  "(max-width: 799px)": function () {},
});
