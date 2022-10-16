"use strict";
//스크롤 반응하는 네비게이션 만들기

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const home = document.querySelector("#index_home");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
// 핸들 스크롤링
const navbarMenu = document.querySelector(".navbar__menu");
const navbarMenuItem = Array.from(navbarMenu.querySelectorAll("li"));
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  navbarMenuItem.forEach((item) => item.classList.remove("active"));
  target.classList.add("active");
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: "smooth",
  });
}

//모달

function iframeLoading() {
  const body = document.querySelector("body");
  const modalWrap = document.querySelector(".modal");
  const work = document.querySelector(".work__projects");
  const project = document.querySelectorAll(".project");
  const modalClose = document.querySelector(".modal_close");
  const bodyContainer = document.querySelector("body");
  document.querySelectorAll(".project").forEach((element) =>
    element.addEventListener("click", () => {
      body.classList.add("modal_open");
      body.classList.add("not-scroll");
      project.forEach((item) => item.classList.remove("active"));
      modalWrap.classList.add("open");
    })
  );
  modalClose.addEventListener("click", () => {
    modalWrap.classList.remove("open");
    body.classList.remove("not-scroll");
    bodyContainer.classList.remove("modal_open");
  });
}
iframeLoading();
// // //스크롤에 따라 바뀌는 것

//시계
window.addEventListener("load", function () {
  clockRun();
});
function clockRun() {
  let d = new Date();
  let s = d.getSeconds();
  let s_angle = s * 6;
  let s_angle_value = "rotate(" + s_angle + "deg)";
  document.querySelector(".clock.s").style.transform = s_angle_value;

  let m = d.getMinutes();
  let m_angle = m * 6;
  let m_angle_value = "rotate(" + m_angle + "deg)";
  document.querySelector(".clock.m").style.transform = m_angle_value;

  var h = d.getHours();
  //시간 계산
  if (h < 12) {
    var h = h;
  } else {
    var h = h - 12;
  }
  var h_angle = h * 30 + (30 / 60) * m;
  var h_angle_value = "rotate(" + h_angle + "deg)";
  document.querySelector(".clock.h").style.transform = h_angle_value;

  setTimeout(clockRun, 1000);
}

//프로젝트
// const workBtnContainer = document.querySelector('.work__categories');
// const projectContainer = document.querySelector('.work__projects');
// const projects = document.querySelectorAll('.project');
// workBtnContainer.addEventListener('click', (e) => {
//   const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
//   if(filter == null){
//     return;
//   }
//   projectContainer.classList.add('ani-out');
//   setTimeout(() =>{
//   projects.forEach((project) => {
//     console.log(project.dataset.type);
//     if (filter === '*' || filter === project.dataset.type) {
//       project.classList.add('visible');
//     } else {
//       project.classList.remove('visible');
//     }
//   });
//   projectContainer.classList.remove('ani-out');
// }, 200);
// });

// const toggleBtn = document.querySelector('.navbar__toggle');
// const menu = document.querySelector('.navbar__menu');
// const bodyBtn = document.querySelector('body');
// toggleBtn.addEventListener('click', () =>{
// toggleBtn.classList.toggle('open');
// menu.classList.toggle('active');
// });

const toggleBtn = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".navbar__menu");
const close = document.getElementsByClassName("close");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggleBtn.classList.toggle("open");
});

// function openModal(){
//   let body = document.getElementsByTagName('body')[0];
//   let modalHtml = `
//   <div class="modal__background">
//   <div class="modal t01" id="modal">
//       <div><button class="modal_close">x</button></div>
//       <iframe src="000.html" name="site" id="iframe"></iframe>
//   </div>
// </div>
//   `
//   body.classList.add("not-scroll");
//   body.insertAdjacentHTML('afterend',modalHtml);
// }

// function closeModal(){
//   let body = document.getElementsByTagName('body')[0];
//   let modal = document.getElementById('modal');

//   body.classList.remove("not-scroll");
//   modal.remove();
// }

//탭버튼 액티브
$(function () {
  var tabBtn = $(".category__btn"); //  ul > li 이를 sBtn으로 칭한다. (클릭이벤트는 li에 적용 된다.)
  tabBtn.click(function () {
    // sBtn에 속해 있는  a 찾아 클릭 하면.
    tabBtn.removeClass("active"); // sBtn 속에 (active) 클래스를 삭제 한다.
    $(this).addClass("active"); // 클릭한 a에 (active)클래스를 넣는다.
  });
});

$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("active");
    $(".work__projects").removeClass("active");

    $(this).addClass("active");
    $("#" + tab_id).addClass("active");
  });
});

$(document).ready(function () {
  $(".popupVideo a").click(function () {
    $(".video-popup").addClass("reveal");
    $(".video-popup .video-wrapper").remove();
    $(".video-popup").append(
      "<div class='video-wrapper'><iframe width='560' height='315' src='https://youtube.com/embed/" +
        $(this).data("video") +
        "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>"
    );
  });
  $(".video-popup-closer").click(function () {
    $(".video-popup .video-wrapper").remove();
    $(".video-popup").removeClass("reveal");
  });
});

function fnMove(seq) {
  var offset = $("#div" + seq).offset();
  $("html, body").animate({ scrollTop: offset.top }, 400);
}
