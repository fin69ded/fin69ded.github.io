["load", "resize"].forEach((el) => {
  window.addEventListener(el, () => {
    const secondScreen = document.querySelectorAll(".second-screen");
    const works = document.querySelectorAll(".works");

    for (let i = 0; i < secondScreen.length; i++) {
      secondScreen[i].style.height = `${works[i].clientHeight + 236}px`;
    }
  });
});
