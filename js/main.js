"use strict";
// Hämtar klasser från headern till hamburgarmenyn
const menuButton = document.querySelector(".header-menu");
const menuLinks = document.querySelector(".menu");

// Öppnar och stänger hamburgarmenyn
menuButton.addEventListener("click", function() {
    menuLinks.classList.toggle("open");
})