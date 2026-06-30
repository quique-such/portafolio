let contador = 0;
  
function showSlide(a) {
  const slider = document.getElementById('image-slider');
  const slides = document.querySelectorAll('.slide');
  
  if (a >= slides.length) {
    contador = 0;
  } else if (a < 0) {
    contador = slides.length - 1;
  } else {
    contador = a;
  }

  const contador2 = -contador * 100 + '%';
  slider.style.transform = 'translateX(' + contador2 + ')';
}

function nextSlide() {
  showSlide(contador + 1);
}

function prevSlide() {
  showSlide(contador - 1);
}