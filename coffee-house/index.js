document.addEventListener(
    'DOMContentLoaded',
    document.querySelector('body').classList.add('appear')
  );
  
  (function underline() {
    if (window.location.href.includes('index')) {
      document.querySelector('.logo').style.cursor = 'default';
    }
  })();
  
  let counter = 1;
  showSlides(counter);
  
  function nextSlide() {
    showSlides((counter += 1));
  }
  
  function prevSlide() {
    showSlides((counter -= 1));
  }
  
  function showSlides(n) {
    let slides = document.getElementsByClassName('slider__body');
    let dots = document.getElementsByClassName('controls__item');
    if (n > slides.length) {
      counter = 1;
    }
    if (n < 1) {
      counter = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[counter - 1].style.display = 'flex';
    slides[counter - 1].classList.add('shift');
    dots[counter - 1].className += ' active';
  }
  
  let next = document.querySelector('.next');
  let prev = document.querySelector('.prev');
  
  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);
  
  /*setInterval(() => {
    nextSlide()
  }, 6000);*/