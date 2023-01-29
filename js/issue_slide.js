const slideWrap = document.querySelector('.slide_wrap');
const slide = document.querySelector('.slide_item');
const slides = document.querySelectorAll('.slide_item');
let curIndex = 0;
const slideCount = slides.length;
const slideWidth = slide.offsetWidth;
const btnNav = document.querySelector('btn_nav')
const prevBtn = document.querySelector('.card_nav .btn_prev')
const nextBtn = document.querySelector('.card_nav .btn_next')
//처음 슬라이드 마지막 슬라이드 복사 함수
makeClone()
//슬라이드 넓이와 위치값 초기화 함수
initFunction()
// 자동 변환 슬라이드 (잠시 멈춤)
showSliding();

//무한 루프 슬라이드
function makeClone() {
  let cloneSlide_first = slides[0].cloneNode(true)
  let cloneSlide_last = slideWrap.lastElementChild.cloneNode(true);
  slideWrap.append(cloneSlide_first)
  slideWrap.insertBefore(cloneSlide_last, slideWrap.firstElementChild)
}
function initFunction(){
  slideWrap.style.width = slideWidth * (slideCount + 2 ) +'px'
  slideWrap.style.left = - slideWidth + 'px'
}

nextBtn.addEventListener('click', function () {
  if (curIndex <= slideCount - 1) {
    slideWrap.style.left = -(curIndex + 2) * slideWidth + 'px';
    slideWrap.style.transition = `${0.5}s ease-out`; //이동 속도
  }
  if (curIndex === slideCount - 1) {
    setTimeout(function () {
      slideWrap.style.left = - slideWidth + 'px';
      slideWrap.style.transition = `${0}s ease-out`;
    }, 500);
    curIndex = -1;
  }
  curIndex += 1;
  console.log(curIndex)
});

prevBtn.addEventListener('click', function () {
  if (curIndex >= 0) {
    slideWrap.style.left = -(curIndex * slideWidth) + 'px';
    slideWrap.style.transition = `${0.5}s ease-out`;
  }
  if (curIndex === 0) {
    setTimeout(function () {
      slideWrap.style.left = - slideCount * slideWidth + 'px';
      slideWrap.style.transition = `${0}s ease-out`;
    }, 500);
    curIndex = slideCount;
  }
  curIndex -= 1;
  console.log(curIndex)
});

// 자동 변환 추가
function sliding() {
  if (curIndex <= slideCount - 1) {
    slideWrap.style.left = -(curIndex + 2) * slideWidth + 'px';
    slideWrap.style.transition = `${0.5}s ease-out`; //이동 속도
  }
  if (curIndex === slideCount - 1) {
    setTimeout(function () {
      slideWrap.style.left = - slideWidth + 'px';
      slideWrap.style.transition = `${0}s ease-out`;
    }, 500);
    curIndex = -1;
  }
  curIndex += 1;
}

function showSliding() {
  setInterval(sliding, 3000);
}

