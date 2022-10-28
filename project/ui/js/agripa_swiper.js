function MySliderBox1__init() {
  let swiper = new Swiper(".agripa_swiper01", {
    slidesPerView: 1, //640~1024 해상도 외 레이아웃 뷰 개수
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }, //위 slidesPerview 여백/위 slidesPerview 여백
    breakpoints: {
      //반응형 조건 속성
      640: {
        //640 이상일 경우
        slidesPerView: 2, //레이아웃 2열
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5.5,
      },
    },
  });
}
MySliderBox1__init();
