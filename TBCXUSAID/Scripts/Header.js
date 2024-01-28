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