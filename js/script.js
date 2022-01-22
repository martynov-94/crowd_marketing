const breakpointLarge = 768;

const [
  headerMenu, 
  headerAuthBtns, 
  headerMenuBtn,
  descriptionBannerSmall,
  descriptionBannerBig,
] = [
  ".header__menu", 
  ".header__auth-btns",
  ".header__menu-btn",
  ".description__banner_small",
  ".description__banner_big",
].map(selector => document.querySelector(selector));

const mobileElements = [
  headerMenuBtn,
  descriptionBannerSmall,
];

const desktopElements = [
  headerMenu, 
  headerAuthBtns,
  descriptionBannerBig,
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