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
    const tl001 = gsap.timeline({
      scrollTrigger: {
        trigger: ".runway_002",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "+=2000",
        toggleActions: "play pause play reset",
      },
    });
    tl001.from(".runway_logo", {
      opacity: 0,
      duration: 1,
    });
    gsap.fromTo(
      ".runway_003_main_img",
      { y: "40rem" },
      {
        y: 0,
        scrollTrigger: {
          trigger: ".runway_003_main_img",
          start: "-100 80%",
          end: "0 70%",
          scrub: 3,
          // markers: true,
        },
      }
    );
  },

  "(max-width: 799px)": function () {},
});
