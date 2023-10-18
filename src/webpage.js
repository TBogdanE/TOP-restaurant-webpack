//import { updatePageMenu } from "./menupage.js";
//import { updatePageHome } from "./homepage.js";

function createHeader() {
  const header = document.createElement("header");
  const restaurantName = document.createElement("div");
  restaurantName.id = 'title';
  restaurantName.textContent = "TBE Food";
  header.appendChild(restaurantName);
  header.appendChild(createNavBar());
  return header;
}

function createNavBar() {
  const navbar = document.createElement("div");
  navbar.id = "navbar";

  const navBtnHome = document.createElement("button");
  navBtnHome.classList.add('navBtn', 'active');
  navBtnHome.textContent = "Home";
  addEventListener("click", (e) => {
    if (e.target.classList.contains('active')) return;
    setBtnActive(navBtnHome);
    updatePageHome();
  });

  const navBtnMenu = document.createElement("button");
  navBtnMenu.classList.add("navBtn");
  navBtnMenu.textContent = "Menu";
  addEventListener('click', (e) => {
    if(e.target.classList('active')) return;
    setBtnActive(navBtnMenu);
    updatePageMenu();
  });

  navbar.appendChild(navBtnHome);
  navbar.appendChild(navBtnMenu);

  return navbar;
}

function startWebpage() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
}

export { startWebpage };
