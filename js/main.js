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


/**
 * Bilspelet
 */

const pictures = [
    {
        src: "images/bildserie010.jpg",
        alt: "En kossa som ligger i ett grönt landskap, lite gultonad bild med äkta färger"
    },
    {
        src: "images/bildserie001.jpg",
        alt: "Lila fingerborgsblommor varav en klocka är mintgrön. Gröna berg bakom blommorna i ljusa färger"
    },
    {
        src: "images/bildserie006.jpg",
        alt: "Tagen uppifrån, en vit blomma med rosa kanter och gul mitten, ljusare färger, gräset bakom är någon mer deskretare grön färg"
    }
];

let picNow = 0;

function buttonNextPic () {

    if (picNow === pictures.length -1) {
        picNow = 0;
    } else { 
        picNow++;
    }

    showNextPic(picNow);
}

function buttonPrevPic () {

    if (picNow === 0) {
        picNow = pictures.length -1;
    } else {
        picNow--;
    }

    showNextPic(picNow);
}

function showNextPic () {
    slideImg.src = pictures[picNow].src;
    slideImg.alt = pictures[picNow].alt;

    counter.innerHTML = `${picNow}/${pictures.length}`;
}

if (buttonNextPic && buttonPrevPic) {
    prevButton.addEventListener("click", buttonPrevPic);
    nextButton.addEventListener("click", buttonNextPic);
}