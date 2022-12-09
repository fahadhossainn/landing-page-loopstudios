"use strict";

const menuOpen = document.querySelector(".navbar__toggle--icon-open");
const menuClose = document.querySelector(".navbar__toggle--icon-close");
const menu = document.querySelector(".mobile__menu");
const toggle = document.querySelector(".navbar__toggle");
const links = document.querySelectorAll(".mobile__menu--link");

const open = () => {
  menuOpen.classList.add("hidden");
  menuClose.classList.remove("hidden");
  menu.style.transform = "translateX(0)";
};
const close = () => {
  menuOpen.classList.remove("hidden");
  menuClose.classList.add("hidden");
  menu.style.transform = "translateX(100%)";
};
menuOpen.addEventListener("click", open);
menuClose.addEventListener("click", close);

links.forEach((link) => {
  link.addEventListener("click", close);
});
