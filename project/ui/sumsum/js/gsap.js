// gsap.js
gsap.registerPlugin(ScrollTrigger);

// 메인 타이틀 애니메이션 - 스크롤 트리거 없이 바로 실행
gsap.to("#title", {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power4.out",
    delay: 1.5 // 로딩 화면이 사라진 후 시작하도록 딜레이 추가
});

// 언어 변경 시 실행될 애니메이션
window.animateTitle = function() {
    gsap.fromTo("#title",
        { opacity: 0, y: 50 },  // 시작 상태
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        }
    );
}