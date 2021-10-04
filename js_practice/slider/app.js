const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = sidebar.children.length;
const mediaQueryRes = 900;

let activeSlideIndex = 0;

window.onload = () => {
  if (window.innerWidth > mediaQueryRes) {
    sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
    sidebar.style.left = `0vw`;
  } else {
    sidebar.style.left = `-${(slidesCount - 1) * 100}vw`;
    sidebar.style.top = `0vh`;

    upBtn.firstElementChild.classList.remove("fa-arrow-up");
    upBtn.firstElementChild.classList.add("fa-arrow-right");

    downBtn.firstElementChild.classList.remove("fa-arrow-down");
    downBtn.firstElementChild.classList.add("fa-arrow-left");
  }
};

window.onresize = () => {
  mainSlide.style.transform = `translate(0, 0)`;
  sidebar.style.transform = `translate(0, 0)`;

  if (window.innerWidth > mediaQueryRes) {
    sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
    sidebar.style.left = `0vw`;

    upBtn.firstElementChild.classList.add("fa-arrow-up");
    upBtn.firstElementChild.classList.remove("fa-arrow-right");

    downBtn.firstElementChild.classList.add("fa-arrow-down");
    downBtn.firstElementChild.classList.remove("fa-arrow-left");
  } else {
    sidebar.style.left = `-${(slidesCount - 1) * 100}vw`;
    sidebar.style.top = `0vh`;

    upBtn.firstElementChild.classList.remove("fa-arrow-up");
    upBtn.firstElementChild.classList.add("fa-arrow-right");

    downBtn.firstElementChild.classList.remove("fa-arrow-down");
    downBtn.firstElementChild.classList.add("fa-arrow-left");
  }

  console.log(window.innerWidth);
};

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" || event.key === "ArrowRight") {
    changeSlide("up");
  } else if (event.key === "ArrowDown" || event.key === "ArrowLeft") {
    changeSlide("down");
  }
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  if (window.innerWidth > mediaQueryRes) {
    mainSlide.style.transform = `translateY(-${activeSlideIndex * mainSlide.clientHeight}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * mainSlide.clientHeight - 1}px)`;
  } else {
    mainSlide.style.transform = `translateX(-${activeSlideIndex * window.innerWidth}px)`;
    sidebar.style.transform = `translateX(${activeSlideIndex * window.innerWidth}px)`;
  }
}
