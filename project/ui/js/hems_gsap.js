gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles(".mobile, .desktop");
ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {
    gsap.fromTo(
      ".pain_point001",
      { x: "-50%" },
      {
        x: 0,
        scrollTrigger: {
          trigger: ".contents",
          start: "-100 80%",
          end: "0 70%",
          scrub: 1,
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
          end: "0 70%",
          scrub: 1,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      ".pain_point003",
      { x: "50%" },
      {
        x: 0,
        scrollTrigger: {
          trigger: ".contents",
          start: "-100 80%",
          end: "0 70%",
          scrub: 1,
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".hems_004_st001",
      { x: "-500px", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".hems_004",
          start: "-150 50%",
          end: "0 70%",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ".hems_004_st002",
      { x: "-400px", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".hems_004_st001",
          start: "-100 50%",
          end: "0 70%",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ".hems_004_st003",
      { x: "-400px", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".hems_004_st002",
          start: "-50 50%",
          end: "0 70%",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ".hems_004_st004",
      { x: "600px", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".hems_004_st002",
          start: "-0 50%",
          end: "0 70%",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ".hems_004_st005",
      { x: "400px", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".hems_004_st004",
          start: "50 50%",
          end: "0 70%",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      ".hems_004_img",
      { scale: 0.7 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: ".hems_004_st003",
          start: "-300 50%",
          end: "0 70%",
          scrub: 1,
        },
      }
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hems_004_st003",
        start: "0 80%",
        end: "+=300 50%%",
        scrub: 1,
        // markers: true,
      },
    });
    tl.fromTo(".circle01", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(".circle02", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(".circle03", { opacity: 0 }, { opacity: 1, duration: 1 });
  },

  "(max-width: 799px)": function () {
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container").offsetWidth,
      },
    });
  },
});
