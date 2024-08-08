let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    }else if (index < 0) {
        slideIndex = slides.length - 1;
    }else{
        slideIndex=index;
    }
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? 'block' : 'none';
    });
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Mostrar la primera diapositiva
showSlide(slideIndex);
document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});


const interval = 3000; // Intervalo en milisegundos

setInterval(nextSlide, interval);