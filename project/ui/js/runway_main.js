const mobileCheck = function () {
  const width = window.innerWidth;
  const gradientBg = document.querySelector(".gradient_bg");
  if (width < 1000) {
    gradientBg.classList.add("mobile");
  } else {
    gradientBg.classList.remove("mobile");
  }
};

window.addEventListener(`load`, mobileCheck);
window.addEventListener("resize", mobileCheck);

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
  if (document.querySelector("body.ko")) {
    document.getElementById("getFrame").src =
      "https://app.storylane.io/demo/qapzdlq8fxvx";
  } else {
    document.getElementById("getFrame").src =
      "https://app.storylane.io/demo/28oo9rmjik0w";
  }
}
function iframe02() {
  if (document.querySelector("body.ko")) {
    document.getElementById("getFrame").src =
      "https://app.storylane.io/demo/z17lzthjencd";
  } else {
    document.getElementById("getFrame").src =
      "https://app.storylane.io/demo/xtmxdjus2eje";
  }
}
function iframe03() {
  if (document.querySelector("body.ko")) {
    document.getElementById("getFrame").src =
      "https://app.storylane.io/demo/vgeijgj1xwnr";
  } else {
    document.getElementById("getFrame").src =
      "https://app.storylane.io/demo/gqgzpodmmeqb";
  }
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
