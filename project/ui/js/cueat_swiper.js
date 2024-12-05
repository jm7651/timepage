window.addEventListener("load", function () {
  document.body.classList.remove("no-scroll");

  var blackBlock = document.querySelector(".blackblock");
  if (blackBlock) {
    blackBlock.style.transition = "opacity 1s";
    blackBlock.style.opacity = 0;
    setTimeout(function () {
      blackBlock.style.display = "none";
    }, 1000);
  }
});
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

// 이 부분을 제거하거나 아래와 같이 수정
function resizeSection() {
  // 모바일에서는 실행하지 않음
  if (window.innerWidth <= 450) return;

  var sections = document.querySelectorAll(".responsive_section");
  var initialWidth = window.innerWidth;
  var initialHeight = window.innerHeight;
  var aspectRatio = initialHeight / initialWidth;

  function adjustSize() {
    // 모바일에서는 실행하지 않음
    if (window.innerWidth <= 450) return;

    var newWidth = window.innerWidth;
    var newHeight = newWidth * aspectRatio;

    sections.forEach(function (section) {
      section.style.width = newWidth + "px";
      section.style.height = newHeight + "px";
    });
  }

  window.addEventListener("resize", adjustSize);
  adjustSize();
}
//모바일 브라우저의 실제 뷰포트 높이 계산
function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// 초기 실행
setViewportHeight();

// 리사이즈 이벤트에서 실행
window.addEventListener("resize", () => {
  setViewportHeight();
});
