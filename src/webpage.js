//import { updatePageMenu } from "./menupage.js";
//import { updatePageContact } from "./contactpage.js";

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
  navBtnHome.classList.add("navBtn");
  navBtnHome.textContent = "Home";
  addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setBtnActive(navBtnHome);
    loadHomePage();
  });

  navbar.appendChild(navBtnHome);

  return navbar;
}

function startWebpage() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
}

export { startWebpage };
