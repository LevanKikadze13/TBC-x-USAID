// Slider functionality
let currentSlideIndex = 1;
let slideInterval;
let sliderContent = document.querySelector('#slider-content-container')

// Function to show a specific slide by index
const showSlide = (index) => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  // Handle slide index out of bounds
  if (index > slides.length) {
    currentSlideIndex = 1;
  }
  if (index < 1) {
    currentSlideIndex = slides.length;
  }

  // Hide all slides and deactivate all dots
  slides.forEach((slide) => (slide.style.display = 'none'));
  dots.forEach((dot) => (dot.className = 'dot'));

  // Show the current slide and activate the corresponding dot
  slides[currentSlideIndex - 1].style.display = 'block';
  dots[currentSlideIndex - 1].className = 'dot active';

  // Clear the interval and restart it
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 4000);
};

// Function to change the current slide by a given offset
const changeSlide = (n) => {
  showSlide(currentSlideIndex += n);
};

// Function to set the current slide directly
const currentSlide = (n) => {
  showSlide(currentSlideIndex = n);
};

// Automatic slideshow change every 4 seconds
slideInterval = setInterval(() => {
  changeSlide(1);
}, 4000);

// Initial slide show
showSlide(currentSlideIndex);