var ww = $(window).width();
var mySwiper = undefined;
const protoPc = document.querySelector(".proto_pc");
function initSwiper() {
  if (ww < 600 && mySwiper == undefined) {
    protoPc.innerHTML = "<img src='images/link/proto_2.png' alt='' />";
    mySwiper = new Swiper(".link_proto_slider", {
      slidesPerView: 1,
      spaceBetween: 10,
      simulateTouch: true,
      // loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: false,
      // },
    });
  } else if (ww >= 620 && mySwiper != undefined) {
    protoPc.innerHTML = "<img src='images/link/proto_pc.png' alt='' />";
    mySwiper.destroy();
    mySwiper = undefined;
  }
}
initSwiper();

$(window).on("resize", function () {
  ww = $(window).width();
  initSwiper();
});
