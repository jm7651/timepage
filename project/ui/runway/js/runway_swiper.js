function MySliderBox2__init() {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.4, //640~1024 해상도 외 레이아웃 뷰 개수
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }, //위 slidesPerview 여백
    breakpoints: {
      //반응형 조건 속성
      640: {
        //640 이상일 경우
        slidesPerView: 1.5, //레이아웃 2열
      },
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
}
MySliderBox2__init();

function MySliderBox3__init() {
  let swiper = new Swiper(".feature_concept", {
    slidesPerView: 3.5, //640~1024 해상도 외 레이아웃 뷰 개수
    spaceBetween: 20,
    breakpoints: {
      //반응형 조건 속성
      640: {
        //640 이상일 경우
        slidesPerView: 4.5, //레이아웃 2열
      },
      768: {
        slidesPerView: 6,
      },
      1000: {
        slidesPerView: 6,
      },
    },
  });
}
var swiper = new Swiper(".tabSwiper", {
  slidesPerView: "auto",
  preventClicks: true,
  preventClicksPropagation: false,
  observer: true,
  observeParents: true,
});

const tabSwiperItem = document.querySelectorAll(".tab_slide_button");
tabSwiperItem.forEach(function (item) {
  item.addEventListener("click", function () {
    tabSwiperItem.forEach(function (e) {
      e.classList.remove("active");
    });
    item.classList.add("active");
    const target = item;
    tabCenter(target);
  });
});
function tabCenter(target) {
  const snbwrap = document.querySelector(".tabSwiper .swiper-wrapper");
  const targetPos = target.getBoundingClientRect();
  const box = document.querySelector(".tabSwiper");
  const boxHarf = box.offsetWidth / 2;
  const Button004 = document.querySelector(".button004");
  let pos;
  let listWidth = 0;
  const swiperSlideElems = snbwrap.querySelectorAll(".swiper-slide");

  swiperSlideElems.forEach(function (swiperSlideElem) {
    listWidth += swiperSlideElem.offsetWidth;
  });

  const selectTargetPos = targetPos.left + target.offsetWidth / 2;

  if (selectTargetPos <= boxHarf) {
    pos = 0;
  } else if (listWidth - selectTargetPos <= boxHarf) {
    pos = listWidth - box.offsetWidth;
  } else if (Button004.classList.contains("active")) {
    pos = listWidth - box.offsetWidth;
  } else {
    pos = selectTargetPos - boxHarf;
  }

  setTimeout(function () {
    snbwrap.style.transform = "translate3d(" + -pos + "px, 0, 0)";
    snbwrap.style.transitionDuration = "500ms";
  }, 200);
}
