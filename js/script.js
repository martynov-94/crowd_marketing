const breakpointLarge = 768;
// const breakpointLarge = 600;

const [
  headerMenu, 
  headerAuthBtns, 
  headerMenuBtn,
] = [
  ".header__menu", 
  ".header__auth-btns",
  ".header__menu-btn",
].map(selector => document.querySelector(selector));

const desktopElements = [
  headerMenu, 
  headerAuthBtns,
];

const mobileElements = [
  headerMenuBtn,
];

[
  "DOMContentLoaded",
  "resize", 
].forEach(event => window.addEventListener(event, toggleElementsVisibility));

function toggleElementsVisibility() {
  if (window.innerWidth >= breakpointLarge) {
    desktopElements.forEach(el => el.classList.remove("visually-hidden"));
    mobileElements.forEach(el => el.classList.add("visually-hidden"))
  } else { 
    desktopElements.forEach(el => el.classList.add("visually-hidden"));
    mobileElements.forEach(el => el.classList.remove("visually-hidden"));
  }
}