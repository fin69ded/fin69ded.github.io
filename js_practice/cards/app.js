const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  if (slide.classList.contains("active")) {
    document.body.style.backgroundImage = slide.style.backgroundImage;
  }
});

for (const slide of slides) {
  slide.addEventListener("click", (event) => {
    clearActiveClasses();

    slide.classList.add("active");
    document.body.style.backgroundImage = slide.style.backgroundImage;
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
