let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
let autoplayInterval;
let isPlaying = true; // Flag for autoplay status

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function playSlides() {
    if (!isPlaying) {
        autoplayInterval = setInterval(() => {
            changeSlide(1);
        }, 8000);
        isPlaying = true;
    }
}

function pauseSlides() {
    clearInterval(autoplayInterval);
    isPlaying = false;
}

// Initial autoplay
autoplayInterval = setInterval(() => {
    changeSlide(1);
}, 8000);

// Start autoplay when Play button is clicked
document.getElementById("playButton").onclick = playSlides;

// Pause autoplay when Pause button is clicked
document.getElementById("pauseButton").onclick = pauseSlides;
