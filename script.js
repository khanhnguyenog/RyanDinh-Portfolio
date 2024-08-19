const slides = document.querySelectorAll('.slide');
let currentIndex = 2;

function updateActiveSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentIndex) {
      slide.classList.add('active');
    }
  });

  const slideWidth = slides[0].clientWidth + 30; // Include margin
  const offset = currentIndex * slideWidth * -1 + (slideWidth * 2);
  document.querySelector('.slider-wrapper').style.transform = `translateX(${offset}px)`;
}

function moveRight() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateActiveSlide();
}

function moveLeft() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateActiveSlide();
}

updateActiveSlide();

window.onload = function() {
  const blackbox = document.querySelector('.black-box');
  const helmetImg = document.querySelector('.helmet-image');
  const signVideo = document.querySelector('.sign-video');

  blackbox.classList.add('show');
  helmetImg.classList.add('show');
  signVideo.classList.add('show');
}

window.onload = function() {
  const kdesign = document.querySelector('.kdesign-logo h1');
  const located = document.querySelector('.location-badge');

  kdesign.classList.add('show');
  located.classList.add('show');
}