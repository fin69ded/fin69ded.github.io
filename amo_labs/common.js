window.onload = function () {
  const labs_ready = 2;
  const items = [];
  const links = [];
  const container = document.querySelector(".labs__body");

  for (let i = 0; i < labs_ready; i++) {
    items.push(document.createElement("div"));
    items[i].classList.add("labs__item");
    links.push(document.createElement("a"));
    links[i].setAttribute("href", `lab${i + 1}/index.html`);
    links[i].appendChild(document.createTextNode(`Lab ${i + 1}`));
    items[i].appendChild(links[i]);

    container.appendChild(items[i]);
  }
};
