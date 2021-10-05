// preloader
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector("#preloader");
  const body = document.body;
  const scrollUp = document.querySelector(".sidebar-footer img");

  setTimeout(() => {
    if (!preloader.classList.contains("preloader-done")) {
      preloader.classList.add("preloader-done");
      body.style.overflow = "inherit";
    }

    // Detect request animation frame
    const scroll =
      window.requestAnimationFrame ||
      // IE Fallback
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    const elementsToShow = document.querySelectorAll(".animate");

    function loop() {
      Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
          element.classList.add("is-visible");
        } /* else {
      element.classList.remove("is-visible");
    } */
      });

      scroll(loop);
    }

    // Call the loop for the first time
    loop();

    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {
      // special bonus for those using jQuery
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      const rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
    }

    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 12);
      }
    };

    scrollUp.addEventListener("click", () => {
      scrollToTop();
    });
  }, 1000);
});

["load", "resize"].forEach((el) => {
  window.addEventListener(el, () => {
    const secondScreen = document.querySelectorAll(".second-screen");
    const works = document.querySelectorAll(".works");

    for (let i = 0; i < secondScreen.length; i++) {
      secondScreen[i].style.height = `${works[i].clientHeight + 236}px`;
    }
  });
});
