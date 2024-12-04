gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles(".mobile, .desktop");
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
    },
  }
);
const tl001 = gsap.timeline({
  scrollTrigger: {
    trigger: ".runway_002",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=1200",
    toggleActions: "play pause play reset",
  },
});
ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {
    gsap.fromTo(
      ".easier_side",
      { x: "-10rem" },
      {
        x: "-0",
        scrollTrigger: {
          trigger: ".runwaypage_003_flex",
          start: "-50 80%",
          end: "+50 30%",
          scrub: 5,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      "#ml_lifecycle",
      { x: "18rem" },
      {
        x: "0",
        scrollTrigger: {
          trigger: ".runwaypage_003_flex",
          start: "-50 80%",
          end: "+50 30%",
          scrub: 5,
          // markers: true,
        },
      }
    );
    // const headings = document.querySelectorAll(".heading");
    // const nums = document.querySelectorAll(".scroll-num");
    // const head = document.querySelector(".head");
    // const numOfTransitions = headings.length;
    // const singleDuration = 1000;
    // const totalDuration = singleDuration * numOfTransitions;
    // headings.forEach((heading, i) => {
    //   gsap.to(heading, {
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: heading,
    //       toggleActions: "play reverse play reverse",
    //       start: "+=" + `${singleDuration * i}s`,
    //       end: "+=" + `${singleDuration}s`,
    //     },
    //   });
    // });
    // nums.forEach((num, i) => {
    //   gsap.to(num, {
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: num,
    //       toggleActions: "play reverse play reverse",
    //       start: "+=" + `${singleDuration * i}s`,
    //       end: "+=" + `${singleDuration}s`,
    //     },
    //   });
    // });
    // gsap.to(".head", {
    //   scrollTrigger: {
    //     pin: ".head",
    //     end: "+=5000s",
    //     pinSpacing: true,
    //   },
    // });
  },

  "(max-width: 799px)": function () {
    gsap.fromTo(
      ".easier_side",
      { x: "-2rem" },
      {
        x: "0rem",
        scrollTrigger: {
          trigger: ".runwaypage_003_flex",
          start: "-50 80%",
          end: "+50 30%",
          scrub: 1,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      "#ml_lifecycle",
      { x: "2rem" },
      {
        x: "0rem",
        scrollTrigger: {
          trigger: ".runwaypage_003_flex",
          start: "-50 80%",
          end: "+50 30%",
          scrub: 1,
          // markers: true,
        },
      }
    );
  },
});
