// 비디오 엘리먼트들을 가져옵니다
const pcVideo = document.querySelector(".gradient_bg_video");
const mobileVideo = document.querySelector(".gradient_bg_m_video");

// 해상도에 따라 비디오를 처리하는 함수
function handleVideoDisplay() {
  // 모바일 기준 해상도를 768px로 설정 (필요에 따라 조정 가능)
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    pcVideo.style.display = "none";
    mobileVideo.style.display = "block";

    // 모바일 비디오가 정지되어 있다면 재생
    if (mobileVideo.paused) {
      mobileVideo.play().catch((error) => {
        console.log("모바일 비디오 재생 실패:", error);
      });
    }
  } else {
    mobileVideo.style.display = "none";
    pcVideo.style.display = "block";

    // PC 비디오가 정지되어 있다면 재생
    if (pcVideo.paused) {
      pcVideo.play().catch((error) => {
        console.log("PC 비디오 재생 실패:", error);
      });
    }
  }
}

// 초기 실행
handleVideoDisplay();

// 화면 크기가 변경될 때마다 함수 실행
window.addEventListener("resize", handleVideoDisplay);
