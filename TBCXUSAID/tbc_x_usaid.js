// Change header background on scroll
document.addEventListener("scroll", () => {
  const header = document.getElementById("js-header");
  if (window.scrollY > 0) {
    // Set a semi-transparent background color when scrolling down
    header.style.backgroundColor = "rgb(26,30,31, 0.8)";
  } else {
    // Set the default background color when at the top
    header.style.backgroundColor = "rgb(26,30,31)";
  }
});

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

// FAQ section functionality
let questions = document.querySelectorAll(".faq-question");

// Function to toggle the visibility of the answer for a question
const toggleAnswer = (index) => {
  const answer = document.getElementById(`answer${index}`);
  answer.classList.toggle("active");
  if (answer.classList.contains("active")) {
    // Expand the answer with a smooth transition
    answer.style.maxHeight = "500px";
    
    // Delay to set max-height to the actual height for smooth transition
    setTimeout(() => {
      const actualHeight = answer.scrollHeight;
      answer.style.maxHeight = `${actualHeight}px`;
    });
  } else {
    // If closing, set max-height back to 0 after a delay
    setTimeout(() => {
      answer.style.maxHeight = "0";
    }, 100);
  }
};

// Attach click event listeners to FAQ questions
questions.forEach((question) => {
  question.addEventListener("click", () => {
    toggleAnswer(question.id.match(/\d+(\.\d+)?/g));
  });
});
