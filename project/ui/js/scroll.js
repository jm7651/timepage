const t1 = new gsap.timeline();
gsap.registerPlugin(ScrollTrigger);
t1.fromTo(".runway_002", 
{opacity:0,},
{scrollTrigger: {
    trigger: ".runway_002",
    markers: true,
    start: "top top",
    end:"+=1200",
    scrub:true,
    pin: true,
  },
  opacity: 1,}
);
