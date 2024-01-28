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