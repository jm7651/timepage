// HTML에서 이미지 태그의 id가 "myImage"인 이미지를 참조합니다.
var image = document.querySelector(".gradient_bg");

// 모바일 디바이스인지 여부를 확인합니다.
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // 모바일 환경에서 이미지를 변경합니다.
  image.classList.add("mobile"); // 새로운 이미지의 경로를 지정합니다.
} else {
  // 모바일이 아닌 환경에서 이미지를 변경합니다.
  image.classList.remove("mobile"); // 기존 이미지의 경로를 지정합니다.
}

// const updateBackgroundLayout = function () {
//   const gradientBg = document.querySelector(".gradient_bg");
//   if (window.innerWidth < 1000) {
//     gradientBg.classList.add("mobile");
//   } else {
//     gradientBg.classList.remove("mobile");
//   }
// };
// console.log(window.innerWidth);

// const mq = window.matchMedia("(max-width: 1000px)");
// mq.addEventListener(updateBackgroundLayout);
// updateBackgroundLayout();

// const runwayVideo002 = document.querySelector(".runway_002_video");
// console.log(runwayVideo002);
// runwayVideo002.pause();
// const runwayvideo002player = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       entry.target.classList.toggle("visible", entry.isIntersecting);

//       // 1. 요소가 화면에 나타났다면
//       if (entry.isIntersecting) {
//         // 2. 옵저버 객체의 unobserve 메서드로 요소의 감지를 해제합니다!
//         entry.target.play();
//       } else {
//         entry.target.pause();
//       }
//     });
//   },
//   { threshold: 0.5 }
// );
// runwayvideo002player.observe(runwayVideo002);

const linkVideo = document.querySelector(".link_video");
const runwayVideo = document.querySelector(".runway_video");
const runway3Video = document.querySelector(".runway_003_video video");
const runwayvideo001player = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("visible", entry.isIntersecting);

      // 1. 요소가 화면에 나타났다면
      if (entry.isIntersecting) {
        // 2. 옵저버 객체의 unobserve 메서드로 요소의 감지를 해제합니다!
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  },
  { threshold: 0.5 }
);

runwayvideo001player.observe(linkVideo);
runwayvideo001player.observe(runway3Video);
function video_start() {
  linkVideo.play();
  runwayVideo.pause();
}
function video_start2() {
  runwayVideo.play();
  linkVideo.pause();
}

linkVideo.addEventListener("ended", myHandler, false);
function myHandler(e) {
  video_start2();
}
runwayVideo.addEventListener("ended", myHandler2, false);
function myHandler2(e) {
  video_start();
}
video_start();

const tabSlideBtn = document.querySelectorAll(".tab_slide_button");

tabSlideBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    tabSlideBtn.forEach(function (e) {
      e.classList.remove("active");
    });
    item.classList.add("active");
  });
});
//프리뷰
function tabUi(evt, tabname) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tab_text");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}
function iframe01() {
  document.getElementById("getFrame").src =
    "https://app.storylane.io/demo/qapzdlq8fxvx";
}
function iframe02() {
  document.getElementById("getFrame").src =
    "https://app.storylane.io/demo/z17lzthjencd";
}
function iframe03() {
  document.getElementById("getFrame").src =
    "https://app.storylane.io/demo/vgeijgj1xwnr";
}
function iframe04() {
  document.getElementById("getFrame").src =
    "https://app.storylane.io/demo/ycb1ybyfzryz";
}
function iframe04() {
  if (document.querySelector("body.ko")) {
    document.getElementById("getFrame").src =
      "https://app.storylane.io/demo/ycb1ybyfzryz";
  } else {
    document.getElementById("getFrame").src =
      "https://app.storylane.io/demo/fpxlpixxp9cn";
  }
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

const overlay = document.querySelectorAll(".md_overlay");
const closeButton = document.querySelector(".modal_close");
const loadbg = document.querySelector(".loadbg");
const defaultIframe = document.querySelector("#defaultIframe");
const modal = document.querySelectorAll(".modal");
const youtubeButton = document.getElementById("runway_youtube_open");
const openYoutubeModal = () => {
  defaultModal.classList.add("youtube_modal");
  defaultModal.classList.remove("hidden");
  document.body.style.overflowY = "hidden";
};
const closeModal = () => {
  document.body.style.overflowY = "unset";
  for (let i = 0; i < modal.length; i++) {
    defaultModal.classList.remove("youtube_modal");
    modal[i].classList.add("hidden");
  }
};
youtubeButton.addEventListener("click", openYoutubeModal);
closeButton.addEventListener("click", closeModal);
for (let i = 0; i < overlay.length; i++) {
  overlay[i].addEventListener("click", closeModal);
}

document.addEventListener("DOMContentLoaded", function () {
  var parallaxText = document.querySelector(".runwaypage_maintext");
  window.addEventListener("scroll", function () {
    var scrollPos = window.pageYOffset;
    if (window.innerWidth > 451) {
      parallaxText.style.transform = "translate(0, -" + scrollPos / 1.2 + "px)";
    } else {
      parallaxText.style.transform = "translate(0, -" + scrollPos / 3.5 + "px)";
    }
  });
});
const textWrapperTop = document.querySelector(
  ".runway_pin_text_wrapper"
).offsetTop;
const windowHeight = innerHeight;
const textWrapperHeight = document.querySelector(
  ".runway_pin_text_wrapper"
).offsetHeight;
const textWrapperHeightHarf = textWrapperHeight / 2;

const listStyleChangeStartY = windowHeight - textWrapperHeight;
const listStyleChangeEndY = textWrapperTop + textWrapperHeightHarf;

const listItems = document.querySelectorAll(".list-item");
const division =
  (listStyleChangeEndY - listStyleChangeStartY) / listItems.length;
window.addEventListener("scroll", () => {
  if (document.getElementById("on"))
    document.getElementById("on").removeAttribute("id");
  if (
    window.scrollY > listStyleChangeStartY &&
    window.scrollY < listStyleChangeEndY
  ) {
    const targetIndex = Math.round(
      (window.scrollY - listStyleChangeStartY) / division
    );
    if (listItems[targetIndex]) listItems[targetIndex].id = "on";
  }
});

//히스토리
history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

//로딩
window.addEventListener("load", function () {
  document.body.classList.remove("no-scroll");
  var blackblock = document.querySelector(".blackblock");
  if (blackblock) {
    blackblock.style.transition = "opacity 1s";
    blackblock.style.opacity = "0";
    setTimeout(function () {
      blackblock.style.display = "none";
    }, 1000);
  }
});
