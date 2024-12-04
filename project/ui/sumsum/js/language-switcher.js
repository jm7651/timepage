// language-switcher.js

function switchLanguage(lang) {
    console.log('언어 변경 시도:', lang);
    
    // html lang 속성 변경
    document.documentElement.setAttribute('lang', lang);
    
    // 텍스트 번역 적용
    document.querySelectorAll('[data-i18n]').forEach(element => {
        updateTranslation(element, lang);
    });

    // background 이미지 업데이트
    document.querySelectorAll('[data-bg-key]').forEach(element => {
        updateBackground(element, lang);
    });

    // <img> 태그 이미지 업데이트
    document.querySelectorAll('[data-img-key]').forEach(element => {
        updateImage(element, lang);
    });

    // 비디오 업데이트
    document.querySelectorAll('[data-video-key]').forEach(element => {
        updateVideo(element, lang);
    });
}

// 텍스트 번역 업데이트
function updateTranslation(element, lang) {
    try {
        const key = element.getAttribute('data-i18n');
        console.log('번역할 요소와 키:', element, key);
        
        if (!window.translations[lang]) {
            console.error(`${lang} 언어에 대한 번역이 없습니다`);
            return;
        }

        let translation = window.translations[lang];
        const keys = key.split('.');
        
        for (const k of keys) {
            translation = translation[k];
            if (!translation) {
                console.error(`키 ${k}에 대한 번역이 없습니다`);
                return;
            }
        }

        if (translation.includes('<br>')) {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }

    } catch (error) {
        console.error(`번역 중 오류 (${key}):`, error);
    }
}

// background 이미지 업데이트
function updateBackground(element, lang) {
    try {
        const key = element.getAttribute('data-bg-key');
        const newSrc = getNestedValue(window.translations[lang], key);
        
        if (!newSrc) {
            console.error(`배경 이미지 경로를 찾을 수 없음: ${key}`);
            return;
        }

        // wrapper 찾기 또는 생성
        let wrapper = element.closest('.bg-wrapper');
        if (!wrapper) {
            wrapper = document.createElement('div');
            wrapper.className = 'bg-wrapper';
            // 원래 요소의 스타일 복사
            wrapper.style.bottom = element.style.bottom || '0';
            wrapper.style.left = element.style.left || '55%';
            wrapper.style.transform = element.style.transform || 'translateX(-50%)';
            
            element.parentNode.insertBefore(wrapper, element);
            wrapper.appendChild(element);
            
            // 스피너 추가
            const spinner = document.createElement('div');
            spinner.className = 'spinner';
            wrapper.appendChild(spinner);
        }

        // 로딩 상태 표시
        wrapper.classList.add('loading');

        // 새 이미지 프리로드
        const img = new Image();
        img.onload = () => {
            setTimeout(() => {
                element.style.backgroundImage = `url(${newSrc})`;
                setTimeout(() => {
                    wrapper.classList.remove('loading');
                    element.style.opacity = '1';
                }, 100);
            }, 300);
        };
        img.src = newSrc;

    } catch (error) {
        console.error(`배경 이미지 업데이트 중 오류:`, error);
        element.closest('.bg-wrapper')?.classList.remove('loading');
    }
}

// <img> 태그 업데이트
function updateImage(element, lang) {
    try {
        const key = element.getAttribute('data-img-key');
        const newSrc = getNestedValue(window.translations[lang], key);
        
        if (!newSrc) {
            console.error(`이미지 경로를 찾을 수 없음: ${key}`);
            return;
        }

        // wrapper 찾기 또는 생성
        let wrapper = element.closest('.img-wrapper');
        if (!wrapper) {
            wrapper = document.createElement('div');
            wrapper.className = 'img-wrapper';
            element.parentNode.insertBefore(wrapper, element);
            wrapper.appendChild(element);
            
            // 스피너 추가
            const spinner = document.createElement('div');
            spinner.className = 'spinner';
            wrapper.appendChild(spinner);
        }

        // 로딩 상태 표시
        wrapper.classList.add('loading');
        
        // 새 이미지 프리로드
        const newImage = new Image();
        newImage.onload = () => {
            setTimeout(() => {
                element.src = newSrc;
                setTimeout(() => {
                    wrapper.classList.remove('loading');
                    element.style.opacity = '1';
                }, 100);
            }, 300);
        };
        newImage.src = newSrc;

    } catch (error) {
        console.error(`이미지 업데이트 중 오류:`, error);
        element.closest('.img-wrapper')?.classList.remove('loading');
    }
}

// 비디오 업데이트
function updateVideo(element, lang) {
    try {
        const key = element.getAttribute('data-video-key');
        const newSrc = getNestedValue(window.translations[lang], key);
        
        if (!newSrc) {
            console.error(`비디오 경로를 찾을 수 없음: ${key}`);
            return;
        }

        // wrapper 찾기 또는 생성
        let wrapper = element.closest('.video-wrapper');
        if (!wrapper) {
            wrapper = document.createElement('div');
            wrapper.className = 'video-wrapper';
            element.parentNode.insertBefore(wrapper, element);
            wrapper.appendChild(element);
            
            // 스피너 추가
            const spinner = document.createElement('div');
            spinner.className = 'spinner';
            wrapper.appendChild(spinner);
        }

        // 로딩 상태 표시
        wrapper.classList.add('loading');

        // source 태그가 있는 경우
        const sourceElement = element.querySelector('source');
        if (sourceElement) {
            sourceElement.src = newSrc;
        }
        
        element.src = newSrc;
        element.load();
        element.play().catch(e => console.error('비디오 재생 실패:', e));
        
        element.addEventListener('loadeddata', () => {
            setTimeout(() => {
                wrapper.classList.remove('loading');
            }, 500);
        }, { once: true });

    } catch (error) {
        console.error(`비디오 업데이트 중 오류:`, error);
        element.closest('.video-wrapper')?.classList.remove('loading');
    }
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => 
        current ? current[key] : undefined, obj);
}

// UI 관련 초기화
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.querySelector('.lang-toggle');
    const langDropdown = document.querySelector('.lang-dropdown');
    const currentLangText = document.querySelector('.current-lang');
    const langOptions = document.querySelectorAll('.lang-option');
    
    // 미디어 요소 초기화
    ['[data-bg-key]', '[data-img-key]', '[data-video-key]'].forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            const wrapperClass = element.hasAttribute('data-bg-key') ? 'bg-wrapper' :
                               element.hasAttribute('data-img-key') ? 'img-wrapper' :
                               'video-wrapper';
            
            if (!element.closest(`.${wrapperClass}`)) {
                const wrapper = document.createElement('div');
                wrapper.className = wrapperClass;
                const spinner = document.createElement('div');
                spinner.className = 'spinner';
                
                element.parentNode.insertBefore(wrapper, element);
                wrapper.appendChild(element);
                wrapper.appendChild(spinner);
            }
        });
    });

    // 토글 버튼 클릭 시 드롭다운 표시/숨김
    langToggle?.addEventListener('click', function(e) {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
        this.classList.toggle('active');
    });

    // 언어 옵션 클릭 이벤트
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const lang = this.dataset.lang;
            console.log('선택된 언어:', lang);
            const langText = this.textContent;
            
            currentLangText.textContent = langText;
            
            langOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            langDropdown.classList.remove('show');
            langToggle.classList.remove('active');
            
            if (window.translations && window.translations[lang]) {
                switchLanguage(lang);
            } else {
                console.error('번역 데이터가 로드되지 않았습니다');
            }
        });
    });

    // 다른 곳 클릭시 드롭다운 닫기
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.language-selector')) {
            langDropdown?.classList.remove('show');
            langToggle?.classList.remove('active');
        }
    });

    // ESC 키로 드롭다운 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            langDropdown?.classList.remove('show');
            langToggle?.classList.remove('active');
        }
    });

    // 초기 active 클래스 설정
    const currentLang = document.documentElement.lang || 'ko';
    const activeOption = document.querySelector(`.lang-option[data-lang="${currentLang}"]`);
    if (activeOption) {
        activeOption.classList.add('active');
        currentLangText.textContent = activeOption.textContent;
    }

    // 초기 언어 설정
    if (window.translations) {
        switchLanguage(currentLang);
    }
});

console.log('language-switcher.js 로드됨');