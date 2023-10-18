import { renderMenuPage } from "./menupage.js";
import { renderHomePage } from "./homepage.js";

function createHeader() {
  const header = document.createElement("header");
  const restaurantName = document.createElement("div");
  restaurantName.id = "title";
  restaurantName.textContent = "TBE Food";
  header.appendChild(restaurantName);
  header.appendChild(createNavBar());
  return header;
}

function createNavBar() {
  const navbar = document.createElement("div");
  navbar.id = "navbar";

  const navBtnHome = document.createElement("button");
  navBtnHome.classList.add("navBtn", "active");
  navBtnHome.textContent = "Home";
  navBtnHome.addEventListener("click", () => {
    if (navBtnHome.classList.contains("active")) return;
    setBtnActive(navBtnHome, navBtnMenu);
    renderHomePage();
  });

  const navBtnMenu = document.createElement("button");
  navBtnMenu.classList.add("navBtn");
  navBtnMenu.textContent = "Menu";
  navBtnMenu.addEventListener("click", () => {
    if (navBtnMenu.classList.contains("active")) return;
    setBtnActive(navBtnMenu, navBtnHome);
    renderMenuPage();
  });

  function setBtnActive(activeBtn, inactiveBtn) {
    inactiveBtn.classList.remove("active");
    activeBtn.classList.add("active");
  }

  navbar.appendChild(navBtnHome);
  navbar.appendChild(navBtnMenu);

  return navbar;
}

function createMain() {
  const main = document.createElement("main");
  main.id = "main";
  return main;
}

function startWebpage() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  renderHomePage();
}

export { startWebpage };
