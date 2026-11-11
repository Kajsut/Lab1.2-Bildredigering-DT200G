"use strict";

const menuButton = document.querySelector(".header-menu");
const menuLinks = document.querySelector(".menu");

menuButton.addEventListener("click", function() {
    menuLinks.classList.toggle("open");
})