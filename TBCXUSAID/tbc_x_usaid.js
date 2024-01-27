let currentSlide = 0;
let intervalId;
let nextBtn = document.querySelector("#nextBtn");
let prevBtn = document.querySelector("#prevBtn");

nextBtn.addEventListener("click", () => {
  nextSlide();
});
prevBtn.addEventListener("click", () => {
  prevSlide();
});

const showSlide = (index) => {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  currentSlide = (index + slides.length) % slides.length;
  slider.style.transform = `translateX(${-currentSlide * 100}%)`;
};

const nextSlide = () => {
  clearInterval(intervalId);
  showSlide(currentSlide + 1);
  startSlider();
};

const prevSlide = () => {
  clearInterval(intervalId);
  showSlide(currentSlide - 1);
  startSlider();
};

const startSlider = () => {
  intervalId = setInterval(nextSlide, 5000);
};

startSlider();

document.addEventListener("scroll", () => {
  const header = document.getElementById("js-header");
  if (window.scrollY > 0) {
    header.style.backgroundColor = "rgb(26,30,31, 0.8)";
  } else {
    header.style.backgroundColor = "rgb(26,30,31)";
  }
});

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
