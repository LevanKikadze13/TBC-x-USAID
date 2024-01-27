let slideIndex = 1;
let slideInterval;

const showSlides = (n) => {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
    slides[i].classList.remove("active");
    slides[i].style.transition = "opacity 1s ease";
  }

  dots[slideIndex - 1].classList.add("active");
  slides[slideIndex - 1].classList.add("active");
};

const nextSlide = () => {
  showSlides(slideIndex += 1);
};

const prevSlide = () => {
  showSlides(slideIndex -= 1);
};

const currentSlide = (n) => {
  showSlides(slideIndex = n);
};

const startSlider = () => {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => nextSlide(), 3000);
};

startSlider();





let questions = document.querySelectorAll(".faq-question")

const toggleAnswer = (index) => {
    const answer = document.getElementById(`answer${index}`);
    answer.classList.toggle('active');
    if (answer.classList.contains('active')) {
      answer.style.maxHeight = '500px'; 
  
      setTimeout( () => {
        const actualHeight = answer.scrollHeight; 
        answer.style.maxHeight = `${actualHeight}px`; // Set max-height to the actual height for smooth transition
      });
    } else {
      // If closing, set max-height back to 0 after a delay
      setTimeout(() => {
        answer.style.maxHeight = '0';
      }, 100);
    }
  };

 
    questions.forEach(question =>{
        question.addEventListener('click', () =>{
            toggleAnswer(question.id.match(/\d+(\.\d+)?/g))
        })
    })