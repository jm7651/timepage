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
    const tl002 = gsap.timeline({
      scrollTrigger: {
        trigger: ".runway_003",
        pin: true,
        scrub: 1,
        start: "top top",
        end: "+=2000",
        toggleActions: "play pause play reset",
      },
    });
    tl002.from(".runway_bg_text01", {
      opacity: 0,
      duration: 1,
    });
    tl002.from(".runway_bg_text02", {
      opacity: 0,
      duration: 1,
    });
    tl002.from(".runway_bg_text03", {
      opacity: 0,
      duration: 1,
    });
    tl002.from(".runway_bg_text04", {
      opacity: 0,
      duration: 1,
    });
    gsap.fromTo(
      ".runway_loop video",
      { transform: "rotate3d(30, 1, 0, 50deg) scale(0.5)", opacity: "0" },
      {
        transform: "rotate3d(1, 1, 1, 0deg)",
        opacity: "1",
        scrollTrigger: {
          trigger: ".runway_loop video",
          start: "0 100%",
          end: "+=500",
          scrub: 3,
          // markers: true,
        },
      }
    );
  },

  "(max-width: 799px)": function () {},
});
