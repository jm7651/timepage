function MySliderBox2__init() {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, //640~1024 해상도 외 레이아웃 뷰 개수
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }, //위 slidesPerview 여백
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
        slidesPerView: 4,
      },
    },
  });
}
MySliderBox2__init();
