let currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
  displaySlides(currentIndex += num);
}

function timerSlide() {
  setInterval(() => {
    setSlides(1);
  }, '5000')
}

timerSlide();


function displaySlides(num) {
  let x;
  const slides = document.getElementsByClassName('imageSlides');
  if (num > slides.length) { currentIndex = 1 }
  if (num < 1) { currentIndex = slides.length }
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = 'none';
  }
  slides[currentIndex - 1].style.display = 'block';

  const dots = document.getElementsByClassName("dot");
  for (x = 0; x < dots.length; x++) {
    dots[x].className = dots[x].className.replace(" active", "");
  }
  dots[currentIndex - 1].className += " active";
}