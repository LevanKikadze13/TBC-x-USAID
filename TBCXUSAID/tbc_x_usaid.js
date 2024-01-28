document.addEventListener("scroll", () => {
  const header = document.getElementById("js-header");
  if (window.scrollY > 0) {
      header.style.backgroundColor = "rgb(26,30,31, 0.8)"; 
  } else {
      header.style.backgroundColor = "rgb(26,30,31)"; 
  }
});




let currentSlideIndex = 1;
let slideInterval;

let sliderContent = document.querySelector('#slider-content-container')

const showSlide = (index) => {
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

if (index > slides.length) {
  currentSlideIndex = 1;
}
if (index < 1) {
  currentSlideIndex = slides.length;
}

slides.forEach((slide) => (slide.style.display = 'none'));
dots.forEach((dot) => (dot.className = 'dot'));

slides[currentSlideIndex - 1].style.display = 'block';
dots[currentSlideIndex - 1].className = 'dot active';

// Clear the interval and restart it
clearInterval(slideInterval);
slideInterval = setInterval(() => {
  changeSlide(1);
}, 4000);
};

const changeSlide = (n) => {
showSlide(currentSlideIndex += n);
};

const currentSlide = (n) => {
showSlide(currentSlideIndex = n);
};

// Automatic slideshow change every 4 seconds
slideInterval = setInterval(() => {
changeSlide(1);
}, 4000);




// Initial slide show
showSlide(currentSlideIndex);



let questions = document.querySelectorAll(".faq-question");

const toggleAnswer = (index) => {
  const answer = document.getElementById(`answer${index}`);
  answer.classList.toggle("active");
  if (answer.classList.contains("active")) {
    answer.style.maxHeight = "500px";

    setTimeout(() => {
      const actualHeight = answer.scrollHeight;
      answer.style.maxHeight = `${actualHeight}px`; // Set max-height to the actual height for smooth transition
    });
  } else {
    // If closing, set max-height back to 0 after a delay
    setTimeout(() => {
      answer.style.maxHeight = "0";
    }, 100);
  }
};

questions.forEach((question) => {
  question.addEventListener("click", () => {
    toggleAnswer(question.id.match(/\d+(\.\d+)?/g));
  });
});
