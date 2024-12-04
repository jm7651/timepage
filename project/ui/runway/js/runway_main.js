// 유틸리티 함수
const utils = {
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  },

  isDeviceMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
};

// 디바이스 체크 및 설정
const deviceManager = {
  init() {
    const gradientBg = document.querySelector(".gradient_bg");
    if (gradientBg) {
      if (utils.isDeviceMobile()) {
        gradientBg.classList.add("mobile");
      } else {
        gradientBg.classList.remove("mobile");
      }
    }

    if (utils.isTouchDevice()) {
      document.body.classList.add('touch-device');
    }
  }
};

// 비디오 플레이어 관리
const videoManager = {
  videos: {},

  init() {
    this.videos = {
      linkVideo: document.querySelector(".link_video"),
      runwayVideo: document.querySelector(".runway_video"),
      runway3Video: document.querySelector(".runway_003_video video")
    };

    if (!this.videos.linkVideo || !this.videos.runwayVideo) return;

    this.setupVideoObserver();
    this.setupVideoEventListeners();
    this.startInitialVideo();
  },

  setupVideoObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    [this.videos.linkVideo, this.videos.runway3Video].forEach(video => {
      if (video) observer.observe(video);
    });
  },

  setupVideoEventListeners() {
    this.videos.linkVideo.addEventListener("ended", () => this.playRunwayVideo());
    this.videos.runwayVideo.addEventListener("ended", () => this.playLinkVideo());
  },

  playLinkVideo() {
    this.videos.linkVideo.play();
    this.videos.runwayVideo.pause();
  },

  playRunwayVideo() {
    this.videos.runwayVideo.play();
    this.videos.linkVideo.pause();
  },

  startInitialVideo() {
    this.playLinkVideo();
  }
};

// 스크롤 효과 관리
const scrollEffectsManager = {
  elements: {},
  config: {
    fps: 16 // 60fps에 해당하는 간격
  },

  init() {
    this.elements = {
      parallaxText: document.querySelector(".runwaypage_maintext"),
      textWrapper: document.querySelector(".runway_pin_text_wrapper"),
      listItems: document.querySelectorAll(".list-item")
    };

    if (!this.elements.parallaxText || !this.elements.textWrapper || !this.elements.listItems.length) {
      return;
    }

    this.setupScrollMetrics();
    this.bindScrollEvents();
  },

  setupScrollMetrics() {
    const { textWrapper } = this.elements;
    this.metrics = {
      textWrapperTop: textWrapper.offsetTop,
      windowHeight: window.innerHeight,
      textWrapperHeight: textWrapper.offsetHeight,
      textWrapperHeightHalf: textWrapper.offsetHeight / 2,
    };

    this.metrics.listStyleChangeStartY = this.metrics.windowHeight - this.metrics.textWrapperHeight;
    this.metrics.listStyleChangeEndY = this.metrics.textWrapperTop + this.metrics.textWrapperHeightHalf;
    this.metrics.division = (this.metrics.listStyleChangeEndY - this.metrics.listStyleChangeStartY) / this.elements.listItems.length;
  },

  bindScrollEvents() {
    const handleParallax = utils.throttle(() => {
      const scrollPos = window.pageYOffset;
      requestAnimationFrame(() => {
        const factor = window.innerWidth > 451 ? 1.2 : 3.5;
        this.elements.parallaxText.style.transform = `translate(0, -${scrollPos / factor}px)`;
      });
    }, this.config.fps);

    const handleListItems = utils.throttle(() => {
      const prevOn = document.getElementById("on");
      if (prevOn) prevOn.removeAttribute("id");

      const scrollY = window.scrollY;
      if (scrollY > this.metrics.listStyleChangeStartY && scrollY < this.metrics.listStyleChangeEndY) {
        const targetIndex = Math.round((scrollY - this.metrics.listStyleChangeStartY) / this.metrics.division);
        requestAnimationFrame(() => {
          if (this.elements.listItems[targetIndex]) {
            this.elements.listItems[targetIndex].id = "on";
          }
        });
      }
    }, this.config.fps);

    window.addEventListener("scroll", handleParallax, { passive: true });
    window.addEventListener("scroll", handleListItems, { passive: true });
  }
};

// 모달 관리
const modalManager = {
  elements: {},

  init() {
    this.elements = {
      overlay: document.querySelectorAll(".md_overlay"),
      closeButton: document.querySelector(".modal_close"),
      modals: document.querySelectorAll(".modal"),
      youtubeButton: document.getElementById("runway_youtube_open")
    };

    if (!this.elements.youtubeButton) return;

    this.bindEvents();
  },

  bindEvents() {
    this.elements.youtubeButton.addEventListener("click", () => this.openYoutubeModal());
    this.elements.closeButton?.addEventListener("click", () => this.closeModal());
    this.elements.overlay.forEach(overlay => {
      overlay.addEventListener("click", () => this.closeModal());
    });
  },

  openYoutubeModal() {
    defaultModal.classList.add("youtube_modal");
    defaultModal.classList.remove("hidden");
    document.body.style.overflowY = "hidden";
  },

  closeModal() {
    document.body.style.overflowY = "unset";
    this.elements.modals.forEach(modal => {
      defaultModal.classList.remove("youtube_modal");
      modal.classList.add("hidden");
    });
  }
};

// 페이지 로딩 관리
const pageLoadManager = {
  init() {
    window.addEventListener("load", () => {
      document.body.classList.remove("no-scroll");
      const blackblock = document.querySelector(".blackblock");
      if (blackblock) {
        blackblock.style.transition = "opacity 1s";
        blackblock.style.opacity = "0";
        setTimeout(() => {
          blackblock.style.display = "none";
        }, 1000);
      }
    });

    // 히스토리 관리
    history.pushState(null, null, location.href);
    window.onpopstate = () => history.go(1);
  }
};

// 앱 초기화
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  deviceManager.init();
  videoManager.init();
  scrollEffectsManager.init();
  modalManager.init();
  pageLoadManager.init();
});