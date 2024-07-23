function MySliderBox1__init() {
  let swiper = new Swiper(".my-slider-box-1", {
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
MySliderBox1__init();

function MySliderBox2__init() {
  let swiper = new Swiper(".my-slider-box-2", {
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

function MySliderBox3__init() {
  let swiper = new Swiper(".my-slider-box-3", {
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
MySliderBox3__init();

function resizeSection() {
  var section = document.getElementById("responsiveSection");
  var initialWidth = window.innerWidth;
  var initialHeight = window.innerHeight;
  var aspectRatio = initialHeight / initialWidth;

  function adjustSize() {
    var newWidth = window.innerWidth;
    var newHeight = newWidth * aspectRatio;
    section.style.width = newWidth + "px";
    section.style.height = newHeight + "px";
  }

  window.addEventListener("resize", adjustSize);
  adjustSize();
}

window.addEventListener("load", resizeSection);
