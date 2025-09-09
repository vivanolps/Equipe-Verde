const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

// Botões
document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// Teclado
document.addEventListener('keydown', (e) => {
  if (e.key === "ArrowRight") {
    current = (current + 1) % slides.length;
    showSlide(current);
  }
  if (e.key === "ArrowLeft") {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }
});