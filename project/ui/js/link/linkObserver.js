let isPaused = false;
const options = { root: null, threshold: 0.5 };
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    // 루트 요소와 타겟 요소가 교차하면 dataset에 있는 이미지 url을    타겟요소의 src 에 넣어준다.
    if (entry.isIntersecting) {
      entry.target.play();

      // 지연 로딩이 실행되면 unobserve 해준다.
    } else {
      entry.target.pause();
    }
  });
}, options);

// videoObservers.forEach((videoObserver) => {
//   videoObserver.pause();
// });
const videoObservers = document.querySelectorAll(".link_observer");
videoObservers.forEach((video) => {
  observer.observe(video);
});
