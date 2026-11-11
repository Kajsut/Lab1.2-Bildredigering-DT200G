"use strict";
// Hämtar klasser från headern till hamburgarmenyn
const menuButton = document.querySelector(".header-menu");
const menuLinks = document.querySelector(".menu");

// Hämtar element från bildspelet
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-slide");
const counter = document.querySelector(".counterslide");
const slideImg = document.querySelector(".slidesho0w");


// Öppnar och stänger hamburgarmenyn
menuButton.addEventListener("click", function() {
    menuLinks.classList.toggle("open");
})