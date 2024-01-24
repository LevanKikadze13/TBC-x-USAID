document.addEventListener("scroll", () => {
    const header = document.getElementById("js-header");
    if (window.scrollY > 0) {
        header.style.backgroundColor = "rgb(26,30,31, 0.8)"; 
    } else {
        header.style.backgroundColor = "rgb(26,30,31)"; 
    }
});
